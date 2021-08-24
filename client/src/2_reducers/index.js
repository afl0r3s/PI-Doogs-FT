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
	LOADING,
} from '../1_actions/actionTypes'

const initialState = {
	breedsAll: [],		//array de razas que tendra toda la info y no se usara para filtrados
	breeds: [],  		//array de razas que se usara para todos los filtrados
	breedDetail: [],	//array con el detalle de la raza buscada
	temperaments: [],	//array de temperamentos que se busca de la BD local
	loading: false,		//variable para mostrar un mensaje o imagen de Loading
	totalPages: 0,		//variable en la que se guarda el total de paginas para la paginacion
	breedsPerPage: [9],//razas por pagina, por ahora se usa el valor con indice 0
	errorSearch: false,	//variable que indica si existio un error en la busqueda de una raza
	statePost: false,	//varaible que indica si se guardo una nueva raza
};

function rootReducer(state = initialState, action) {
	//console.log("action: ",action)
	switch (action.type) {
		case GET_BREEDS:
			return {
				...state,
				loading: false,
				errorSearch: false,
				breedsAll: action.payload,
				breeds:    action.payload,
				totalPages: Math.ceil(action.payload.length / state.breedsPerPage[0]),
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
		case GET_BREEDTEMPERAMENT:
			const allBreeds = state.breedsAll;
			//var breedTemnperaments = state.breedsAll;
			var breedTemnperaments = action.payload === 'ALL' ? 
				breedTemnperaments = state.breedsAll :
				breedTemnperaments = allBreeds.filter(e => e.temperament && e.temperament.includes(action.payload))
			return {
				...state,
				loading: false,
				breeds: breedTemnperaments,
				totalPages: Math.ceil(breedTemnperaments.length / state.breedsPerPage[0]),
			};
		case FILTER_SOURCE:
			const filterBreeds = state.breedsAll;
			var breedsFiltered = action.payload === 'ALL' ? 
				breedsFiltered = state.breedsAll :
				breedsFiltered = filterBreeds.filter(e => e.origin === action.payload)
			return {
				...state,
				loading: false,
				breeds: breedsFiltered,
				totalPages: Math.ceil(breedsFiltered.length / state.breedsPerPage[0]),
			};
		case SORT_GENERAL:
			var sortArray = state.breeds;
			if(action.payload === 'ALL' ) sortArray.sort((a,b) => a.id - b.id )
			else if(action.payload === 'AZ'){
				sortArray.sort((a,b) => {
					const value1 = b.name;
					const value2 = a.name;
					if(value1 > value2) return -1
					if(value1 < value2) return 1
					else { return 0 }
				})
			}
			else if(action.payload === 'ZA'){
					sortArray.sort((a,b) => {
						const value1 = a.name;
						const value2 = b.name;
						if(value1 > value2) return -1
						if(value1 < value2) return 1
						else { return 0 }
					})
			}
			else if(action.payload === 'MoreLess') sortArray.sort((a,b) => b.weight_min - a.weight_min )
			else sortArray.sort((a,b) => a.weight_min - b.weight_min )
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: sortArray,
				totalPages: Math.ceil(sortArray.length / state.breedsPerPage[0]),
			};
		case POST_BREED:
			var stateSave = false;
			if(action.payload) stateSave = true;
			return {
				...state,
				statePost: stateSave,
			};
		case LOADING:
			return {
				...state,
				loading: true,
			};
		case ERROR_SEARCH:
			return {
				...state,
				loading: false,
				errorSearch: true,
				breedDetail: action.payload,
		};
		default: {
			return state;		
		}
		
		/*
		case SORT_WEIGHT:
			var sortArray2 = state.breedsAll;
			if(action.payload === 'ALL' ) sortArray2.sort((a,b) => a.id - b.id )
			else if(action.payload === 'MoreLess') sortArray2.sort((a,b) => b.weight_min - a.weight_min )
			else sortArray2.sort((a,b) => a.weight_min - b.weight_min )
			return {
				...state,
				loading: false,
				errorSearch: false,
				breeds: sortArray2,
				totalPages: Math.ceil(sortArray2.length / state.breedsPerPage[0]),
			};
		*/

	}
};

export default rootReducer;
