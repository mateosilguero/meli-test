import React from 'react';
import Navbar from '../components/navbar';
import ItemDetail from '../components/itemDetail';
import { getItem } from '../services/items';

class ItemDetails extends React.Component {
	constructor() {
		super();
		this.state = {
			item: {}
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
				<ItemDetail item={item} />				
			</div>
		)
	}
}

export default ItemDetails;