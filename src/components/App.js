// react imports
import React from 'react'

// semantic-ui imports
import { Grid, Container } from 'semantic-ui-react'

// project file imports
import NewMotherThread from './NewMotherThread.js'
import { About } from './About.js'
import Mothers from './Mothers.js'

export const App = () => {
	return (
		<Container style={{marginTop: '10px'}}>
			<Grid columns={2}>
				<Grid.Column width={8}>
					<Mothers/>
				</Grid.Column>
				<Grid.Column width={7}>
					<Grid.Row>
						<NewMotherThread />
					</Grid.Row>
					<Grid.Row style={{marginTop: '20px'}}>
						<About/>
					</Grid.Row>
				</Grid.Column>
			</Grid>
		</Container>
	)
}