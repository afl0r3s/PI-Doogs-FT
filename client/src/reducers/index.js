import { ADD_BREED } from '../actions/actionTypes'

const initialState = {
	allBreeds: [],
	//loading: false,
	// moviesFavourites: [],
	// movieDetail: {},
};

function rootReducer(state = initialState, action) {
	//console.log(action)
	switch (action.type) {
		case ADD_BREED:
			return {
				...state,
				moviesFavourites: state.moviesFavourites.concat(action.payload),
			};

		// case 'LOADING':
		// 	return {
		// 		...state,
		// 		loading: true,
		// 	};
		default: {
			return state;
		}
	}
};

export default rootReducer;
