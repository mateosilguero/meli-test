import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Container = styled.div`
	background: white;
	display: flex;
	padding: 16px;
    border: 0.2px solid #ebebeb;
`;

const Title = styled.p`
	padding: 4px 0 8px 8px;
	margin: 0;
	font-size: 16px;
    font-weight: 300;
`;

const Condition = styled(Title)`
	font-size: 14px;
    color: green;
`;

const Price = styled(Title)`
	font-size: 18px;
    font-weight: 500;
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #222;
`;

const Item = ({ data }) => {
	return (
		<StyledLink to={`/items/${data.id}`}>
			<Container>
				<img src={data.picture} alt={`item ${data.id} picture`} height={150} />
				<div>				
					<Price>
						${(new Intl.NumberFormat('es').format(data.price.amount))}
					</Price>
					<Title>{data.title}</Title>
					{ data.condition === 'new' && 
						<Condition>Nuevo !</Condition>
					}
				</div>
			</Container>
		</StyledLink>
	)
}

export default Item;