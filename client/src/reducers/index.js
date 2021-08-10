import { GET_BREEDS } from '../actions/actionTypes'

const initialState = {
	allBreeds: [],
	//loading: false,
	// moviesFavourites: [],
	// movieDetail: {},
};

function rootReducer(state = initialState, action) {
	//console.log(action)
	switch (action.type) {
		case GET_BREEDS:
			return {
				...state,
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
