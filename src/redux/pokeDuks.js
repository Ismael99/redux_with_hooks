import axios from 'axios'
//Contantes 
const dataInicial = {
	objects: [],
	offset: 0
}

//Types
const GET_POKEMONS = 'GET_POKEMONS'
const NEXT_PAGE = "NEXT_PAGE"

//Reducer
export default function pokeReducer(state=dataInicial, action){
	switch(action.type){
		case GET_POKEMONS:
			return {
				...state,
				objects: action.payload
			}
		case NEXT_PAGE: 
			return{
				...state, 
				offset: action.payload.offset,
				objects: action.payload.objects
			}
		default:
			return state
	}
}


//Acciones
export	const getPokemonAction = () => async (dispath, getState) =>{
	try{
		const {offset} = getState().pokemones
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
		dispath({
			type: GET_POKEMONS,
			payload: res.data.results
		})
	}catch(err){
		console.log(err)
	}
}

export const nextPage = (number) => async (dispath, getState) => {
	try{
		const {offset} = getState().pokemones
		console.log(getState())
		const newOffset = number + offset
		console.log(offset)
		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${newOffset}&limit=20`)
		dispath({
			type: NEXT_PAGE,
			payload: {
				objects: res.data.results,
				offset: newOffset
			}
		})
	}catch(err){
		console.log(err)
	}
}


