import { 
	GET_BREEDS, 
	GET_BREEDS_NAME, 
	ERROR_SEARCH,
	GET_DETAIL,
	LOADING,
} from '../1_actions/actionTypes'
//const breedsPerPage = 9;

const initialState = {
	breeds: [],
	breedDetail: [],
	loading: false,
	totalPages: 0,
	breedsPerPage: [9,12],
	errorSearch: false
	// moviesFavourites: [],
	// movieDetail: {},
};

function rootReducer(state = initialState, action) {
	console.log("action: ",action)
	switch (action.type) {
		case GET_BREEDS:
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: action.payload,
				totalPages: Math.ceil(action.payload.length / state.breedsPerPage[0]),
			};
		case GET_BREEDS_NAME:
				return {
					...state,
					loading: false,
					errorSearch: false,
					breeds: action.payload,
					totalPages: Math.ceil(action.payload.length / state.breedsPerPage[0]),
				};
		case GET_DETAIL:
			return {
				...state,
				loading: false,
				breedDetail: action.payload,
				totalPages: Math.ceil(action.payload.length / state.breedsPerPage[0]),
			};
		case ERROR_SEARCH:
			return {
				...state,
				loading: false,
				errorSearch: true,
				breedDetail: action.payload,
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
