// react imports
import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

// semantic-ui imports
import { Container } from 'semantic-ui-react'

// project file imports
import NewMotherThread from './NewMotherThread.js'
import { About } from './About.js'
import Mothers from './Mothers.js'
import Header from './Header.js'
import NewUsername from './NewUsername.js'

export const App = () => {
	return (
		<Container style={{marginTop: '10px'}}>

			<BrowserRouter>
				<Header/>
				<Switch>
					<Route path='/' exact component={Mothers}/>
					<Route path='/new' exact component={NewMotherThread}/>
					<Route path='/about' exact component={About}/>
					<Route path='/change_name' exact component={NewUsername}/>
					<Route component={Mothers}/>
				</Switch>
			</BrowserRouter>
		</Container>
	)
}