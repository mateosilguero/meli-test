import BaseController from './base.controller';
import Constants from '../config/constants';
import axios from 'axios';

class ItemsController extends BaseController {

  getAll = (req, res, next) => {
    try {
      const { search } = req.query;
      axios.get(`${Constants.meliAPI.sites}?q=${search}&limit=4`)
        .then(({ data }) => {
          const items = data.results.map(({ id, title, currency_id, price, thumbnail, condition, shipping }) => ({
            id,
            title,
            price: {
              currency: currency_id,
              amount: price,
              decimals: 0
            },
            picture: thumbnail,
            condition,
            free_shipping: shipping.free_shipping
          }));
          const categoriesValues = data.available_filters.find(x => x.id === 'category');
          let categories = [];
          if (categoriesValues) {
            categories = 
              categoriesValues.values
                .sort((a,b) => b.results - a.results)
                .map(v => v.name)
                .splice(0, 4);
          }

          res
            .status(201)
            .json({
              author: Constants.author,
              categories,
              items
            });
        })
        .catch(err => {
          throw err;
        })
    } catch(err) {
      err.status = 400;
      next(err);
    }
  }

  getItemByID = async (req, res, next) => {
    try {
      const { id } = req.params;
      Promise.all([
        axios.get(`${Constants.meliAPI.item}/${id}`),
        axios.get(`${Constants.meliAPI.item}/${id}/description`)
      ])
      .then(([
        { 
          data: {
            id,
            title,
            category_id,
            condition,
            currency_id,
            price,
            secure_thumbnail,            
            shipping,
            sold_quantity
          }
        },
        { data: { plain_text } }
      ]) =>
        axios.get(`${Constants.meliAPI.categories}/${category_id}`)
          .then(({ data: { path_from_root } }) => {
            res.status(201).json({
              author: Constants.author,
              item: {
                id,
                title,
                price: {
                  currency: currency_id,
                  amount: price,
                  decimals: 0
                },
                picture: secure_thumbnail,
                condition,
                category: path_from_root.map(v => v.name),
                free_shipping: shipping.free_shipping,
                sold_quantity,
                description: plain_text && plain_text.split('¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯').join('\n')
              }
            })
          })
          .catch(err => {
            throw err;
          })
      )
    } catch(err) {
      err.status = 400;
      next(err);
    }
  }

}

export default new ItemsController();
