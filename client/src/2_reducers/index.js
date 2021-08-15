import { 
	GET_BREEDS, 
	GET_BREEDS_NAME, 
	ERROR_SEARCH,
	GET_DETAIL,
	FILTER_SOURCE,
	SORT_ALPHABETIC,
	SORT_WEIGHT,
	GET_TEMPERAMENTS,
	GET_BREEDTEMPER,
	POST_BREED,
	LOADING,
} from '../1_actions/actionTypes'

const initialState = {
	breeds: [],
	breedsAll: [],
	breedDetail: [],
	temperaments: [],
	loading: false,
	totalPages: 0,
	breedsPerPage: [9,12],
	errorSearch: false,
	statePost: false,
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
				breedsAll: action.payload,
				totalPages: Math.ceil(action.payload.length / state.breedsPerPage[0]),
				statePost: false,
			};
		case GET_TEMPERAMENTS:
			return {
				...state,
				temperaments: action.payload,
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
		case FILTER_SOURCE:
			const allBreeds = state.breedsAll;
			var breedsFiltered = action.payload === 'ALL' ? 
				breedsFiltered = state.breedsAll :
				breedsFiltered = allBreeds.filter(e => e.origin === action.payload)
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: breedsFiltered,
				totalPages: Math.ceil(breedsFiltered.length / state.breedsPerPage[0]),
			};
		case SORT_ALPHABETIC:
			var sortArray = state.breedsAll;
			sortArray =  action.payload === 'ZA' ?
				sortArray.sort((a,b) => {
					const value1 = a.name;
					const value2 = b.name;
					if(value1 > value2) return -1
					if(value1 < value2) return 1
					else { return 0 }
				})
			:
				sortArray.sort((a,b) => {
					const value1 = b.name;
					const value2 = a.name;
					if(value1 > value2) return -1
					if(value1 < value2) return 1
					else { return 0 }
				})
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: sortArray,
				totalPages: Math.ceil(sortArray.length / state.breedsPerPage[0]),
			};
		case SORT_WEIGHT:
			var sortArray2 = state.breedsAll;
			console.log('estoy en ordenamiento por peso')
			
			sortArray2 =  action.payload === 'LessMore' ?
				sortArray2.sort((a,b) => {
					const value1 = a.weight;
					const value2 = b.weight;
					if(value1 > value2) return -1
					if(value1 < value2) return 1
					else { return 0 }
				})
			:
				sortArray.sort((a,b) => {
					const value1 = b.weight;
					const value2 = a.weight;
					if(value1 > value2) return -1
					if(value1 < value2) return 1
					else { return 0 }
				})
				
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: sortArray2,
				totalPages: Math.ceil(sortArray2.length / state.breedsPerPage[0]),
			};
		case GET_BREEDTEMPER:
			var breedTemnperaments = state.breedsAll;
			breedTemnperaments = action.payload === 'ALL' ? 
				breedTemnperaments = state.breedsAll :
				breedTemnperaments = breedTemnperaments.filter(e => e.temperament && e.temperament.includes(action.payload))
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: breedTemnperaments,
				totalPages: Math.ceil(breedTemnperaments.length / state.breedsPerPage[0]),
			};
		case POST_BREED:
			var stateSave = false;
			if(action.payload) stateSave = true;
			return {
				...state,
				statePost: stateSave,
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
		default: {
			return state;		}
	}
};

export default rootReducer;
