import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	color: darkgrey;
	max-width: 850px;
	margin: 0 auto;
	padding: 16px;
	font-size: 16px;
`;

const Categories = ({ categories }) =>
	<Container>
		{ categories.join(' | ') }
	</Container>

export default Categories;