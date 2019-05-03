import React from 'react';
import Navbar from '../components/navbar';
import ItemDetail from '../components/itemDetail';
import Categories from '../components/categories';
import { getItem } from '../services/items';

class ItemDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			item: null
		}
	}

	componentDidMount() {
	    getItem(this.props.match.params.id)
	    	.then(res => {
	    		this.setState({ item: res.item });
	    	})
	};

	render() {
		const { item } = this.state;
		return (
			<div>
				<Navbar />
				{
					item &&
					<Categories
						categories={item.category}
					/>
				}
				{ item && <ItemDetail item={item}/> }				
			</div>
		)
	}
}

export default ItemDetails;