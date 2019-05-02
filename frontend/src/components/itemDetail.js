import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	max-width: 850px;
	margin: 16px auto;
	padding: 16px;
	background: white;
	display: flex;
	flex-direction: column;
`;

const Item = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Title = styled.p`
	padding: 4px 0 8px 8px;
	margin: 0;
	font-size: 24px;
    font-weight: 500;
`;

const Condition = styled(Title)`
	font-size: 14px;
	font-weight: 300;
`;

const Price = styled(Title)`
	font-size: 48px;
    font-weight: 500;
`;

const Button = styled.button`
	background: #3483fa;
	color: white;
	border-radius: 4px;
	padding: 8px 16px;
	font-size: 24px;
	margin: 48px 0 8px 8px;
`;

const conditions = {
	new: 'Nuevo'
}

const ItemDetail = ({ item }) => {
	return (
		<Container>
			<Item>
				<img src={item.picture} alt="item picture" height={600} width={300} />
				<div style={{ width: '50%' }}>
					<Condition>
						{conditions[item.condition]} - {item.sold_quantity} vendidos
					</Condition>													
					<Title>
						{item.title}
					</Title>
					<Price>
						{
							item.price &&
							`$${(new Intl.NumberFormat('es').format(item.price.amount))}`
						}
					</Price>
					<Button>Comprar</Button>
				</div>
			</Item>
			<div>
				<h2>
					Descripción del producto
				</h2>
				<p style={{ whiteSpace: 'pre-line' }}>
					{item.description}
				</p>
			</div>
		</Container>
	)
}

export default ItemDetail;