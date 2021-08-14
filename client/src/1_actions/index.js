import axios from 'axios';

import { 
	GET_BREEDS, 
	GET_BREEDS_NAME, 
	ERROR_SEARCH,
	GET_DETAIL,
	LOADING ,
} from './actionTypes';

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

/*
export const getMovies = (titulo) =>{
	return (dispatch) => {
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&s=${titulo}`)
			.then(response => response.json())
			.then(obj => {
				dispatch({ type: GET_MOVIES, payload: obj })
			})
	}
};

export const addMovieFavorite = (movie) => { //payload, obj que respresenta una movie
	return {
		type: ADD_MOVIE_FAVORITE,
		payload: movie
	}
};

export const getMovieDetails = (id) =>{ //el id lo recibimos de un button al que se le hace clic
    return (dispatch) => {
		//dispatch({type: 'LOADING'});
		return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
			.then(response => response.json())
			.then(obj => {
				dispatch({ type: GET_MOVIES_DETAILS, payload: obj });
			})
	}
};

export const removeMovie = (id) => {
	return {
		type: REMOVE_MOVIE_FAVORITE,
		payload: id
	}
};
*/
