import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getPokemonAction, nextPage} from '../redux/pokeDuks'
export const Pokemones = () =>{
	const dispatch = useDispatch()
	const pokemones = useSelector(store => store.pokemones.objects)
	useEffect(()=>{
		dispatch(getPokemonAction())
	})
	return(
		<>
			<div className='flex flex-col items-center justify-center w-screen h-screen'>
				<button onClick={ () => dispatch(getPokemonAction())} className='px-2 bg-blue-300 border-transparent focus:outline-none rounded-md hover:opacity-70 transform hover:scale-110'>Fetch</button>
				{
					pokemones.map((pokemon, key) => (
						<ul key={pokemon.name}>
							<li> {pokemon.name} </li>
						</ul>
					))
				}
				<button onClick={()=>dispatch(nextPage(20))}  className='px-2 bg-red-400 border-transparent rounded-md focus:opacity-75 focus:outline-none transform hover:scale-110'> Next </button>
			</div>
		</>
	)
}




