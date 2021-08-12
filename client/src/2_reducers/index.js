import { GET_BREEDS, LOADING } from '../1_actions/actionTypes'
const breedsPerPage = 9;

const initialState = {
	breeds: [],
	loading: false,
	totalPages: 0,
	// moviesFavourites: [],
	// movieDetail: {},
};

function rootReducer(state = initialState, action) {
	//console.log(action)
	switch (action.type) {
		case GET_BREEDS:
			return {
				...state,
				loading: false,
				breeds: action.payload,
				totalPages: Math.ceil(action.payload.length / breedsPerPage),
			};
		case LOADING:
			return {
				...state,
				loading: true,
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
