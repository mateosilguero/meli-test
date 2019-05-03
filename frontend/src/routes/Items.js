import React from 'react';
import Navbar from '../components/navbar';
import Item from '../components/item';
import Categories from '../components/categories';
import { getAll } from '../services/items';
import styled from 'styled-components';

const ItemsContainer = styled.div`
	max-width: 850px;
	margin: auto;
	margin-bottom: 16px;
	padding: 16px;
	background: white;
	display: flex;
	flex-direction: column;
`;

class Items extends React.Component {
	constructor() {
		super();
		this.state = {
			categories: [],
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
	    		this.setState({ ...res });
	    	})
	}

	render() {
		const { items, categories } = this.state;
		return (
			<div>
				<Navbar />
				<Categories
					categories={categories} 
				/>
				<ItemsContainer>
					{
						items.map((item, index) =>
							<Item
								data={item}
								key={index}
							/>
						)
					}
				</ItemsContainer>
			</div>
		)
	}
}

export default Items;