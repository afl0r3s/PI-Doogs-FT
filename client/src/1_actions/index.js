import axios from 'axios';

import { 
	GET_BREEDS, 
	GET_BREEDS_NAME, 
	ERROR_SEARCH,
	GET_DETAIL,
	FILTER_SOURCE,
	SORT_GENERAL,
	GET_TEMPERAMENTS,
	GET_BREEDTEMPERAMENT,
	POST_BREED,
	LOADING ,
} from './actionTypes';

export const getTemperaments = () => {
	return async (dispatch) => {
		var temperamentsInfo = await axios.get(`http://localhost:3001/temperament`);
		return dispatch({ type: GET_TEMPERAMENTS, payload: temperamentsInfo.data})
	}
}

export const getBreeds = () => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		var breedsInfo = await axios.get(`http://localhost:3001/dogs`);
		return dispatch({ type: GET_BREEDS, payload: breedsInfo.data})
	}
}

export const getBreedsName = (nameBreed) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		var breedsInfo2 = await axios.get(`http://localhost:3001/dogs?name=${nameBreed}`);
		if(breedsInfo2.data[0].id === 0){
			return dispatch({ type: ERROR_SEARCH, payload: [{id:0, name:'WarnError'}]})
			
		}else{
			return dispatch({ type: GET_BREEDS_NAME, payload: breedsInfo2.data})

		}
	}
}

export const getDetail = (id) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		var breedsInfo = await axios.get(`http://localhost:3001/dogs/${id}`);
		return dispatch({ type: GET_DETAIL, payload: breedsInfo.data})

	}
}

export const getBreedstTemperaments = (payload) => {
	return async (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: GET_BREEDTEMPERAMENT, payload})
	}
}

export const filterSource = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: FILTER_SOURCE, payload})

	}
}

export const sortAlphabetic = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: SORT_GENERAL, payload})
	}
}

export const postBreed = (payload) => {
	return async (dispatch) => {
		var response = await axios.post(`http://localhost:3001/dog`, payload);
		return dispatch({ type: POST_BREED, payload: response})
	}
}

/*
export const sortweight = (payload) => {
	return (dispatch) => {
		dispatch({ type: LOADING})
		return dispatch({ type: SORT_WEIGHT, payload})
	}
}
*/