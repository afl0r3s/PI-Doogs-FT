import { GET_BREEDS } from '../1_actions/actionTypes'

const initialState = {
	breeds: [],
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
				breeds: action.payload
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
