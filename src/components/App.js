import React from 'react'

import NewMotherThread from './NewMotherThread.js'
import { About } from './About.js'
import Mothers from './Mothers.js'

export const App = () => {
	return (
		<div className='ui container' style={{ marginTop: '10px' }}>
			<div className='ui grid'>
				<div className='column ten wide'>
					<Mothers/>
				</div>
				<div className='column five wide'>
					<div className='row'>
						<NewMotherThread />
					</div>
					<div className='row' style={{ marginTop: '50px' }}>
						<About/>
					</div>
				</div>
			</div>
		</div>
	)
}