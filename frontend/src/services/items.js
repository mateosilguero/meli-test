import axios from 'axios';
import Constants from './constants';

export const getAll = (search) =>
	axios
		.get(`${Constants.apiurl}/items?search=${search}`)
		.then(res => res.data);

export const getItem = (id) =>
	axios
		.get(`${Constants.apiurl}/items/${id}`)
		.then(res => res.data);