import { ADD_BREED } from './actionTypes'

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