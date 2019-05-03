import path from 'path';

// Default configuations applied to all environments
const defaultConfig = {
  env: process.env.NODE_ENV,
  version: require('../../package.json').version,
  root: path.normalize(__dirname + '/../../..'),
  port: process.env.APIPORT || 4567,
  apiPrefix: '/api',
  meliAPI: {
  	sites: 'https://api.mercadolibre.com/sites/MLA/search',
  	item: 'https://api.mercadolibre.com/items',
    categories: 'https://api.mercadolibre.com/categories'
  },
  author: {
	name: "Mateo",
	lastname: "Silguero"
  }
};

// Recursively merge configurations
export default defaultConfig;
