import React from 'react';
import Navbar from '../components/navbar';
import Item from '../components/item';
import { getAll } from '../services/items';

class Items extends React.Component {
	constructor() {
		super();
		this.state = {
			items: []
		}
	}

	componentDidMount() {
		this.fetchItems();
	};

	componentDidUpdate(prevProps) {
		if(prevProps.location.search !== this.props.location.search) {
			this.fetchItems();
		}
	};

	fetchItems() {
		const params = new URLSearchParams(this.props.location.search);
		const search = params.get('search');
	    getAll(search)
	    	.then(res => {
	    		this.setState({ items: res.items });
	    	})
	}

	render() {
		const { items } = this.state;
		return (
			<div>
				<Navbar />
				<div
					style={{
						maxWidth: 850,
						margin: '16px auto',
						padding: 16,
						background: 'white',
						display: 'flex',
						flexDirection: 'column'
					}}
				>
					{
						items.map((item, index) =>
							<Item
								data={item}
								key={index}
							/>
						)
					}
				</div>
			</div>
		)
	}
}

export default Items;