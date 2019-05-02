import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Bar = styled.div`
	background: #fff159;	
`;

const Container = styled.div`
	max-width: 850px;
	height: 48px;
	margin: auto;
	padding: 0 16px;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const InputContainer = styled.div`
	display: flex;
	width: 100%;
`;

const Input = styled.input`
	height: 32px;
	width: 100%;
	padding-left: 32px;
	font-size: 16px;
`;

const Button = styled.button`
    height: 38px;
    background: white;
    border: 1px solid lightgray;
    padding: 0 8px;
`;

const Navbar = () => {
	const [value, setValue] = useState('');
	return (		
		<Bar>
			<Container>
				<Link to='/'>
					<img src="/meli-logo.png" style={{ marginRight: 24 }} alt="logo" width={44} height={32} />
				</Link>
				<InputContainer>
					<Input value={value} placeholder="Search..." onChange={(e) => setValue(e.target.value)} />
					<Link to={`/items?search=${value}`}>
						<Button>
							<img src="/search.png" alt="logo" width={24} height={24} />
						</Button>
					</Link>
				</InputContainer>
			</Container>
		</Bar>
	)
}

export default Navbar;