import React from 'react'
import {Router} from '@reach/router'
import {Pokemones} from './components/Pokemones'
import {Provider} from 'react-redux'
import generateStore from './redux/store'

export const App = () =>{
	const store = generateStore()
	return(
		<Provider store={store}>	
			<Router>
				<Pokemones path='/' />
			</Router>
		</Provider>
	)
}
