import React from 'react'

import { Segment, Icon, Card } from 'semantic-ui-react'

export const About = () => {
	return (
		<Segment>
			<Card
				fluid
				centered
			   	header='John Patrick Valera'
			    meta='React Developer'
			    description='John Patrick is a react developer living in Philippines who enjoys listening to Lorde and hanging out with his 3 dogs.'
			  />
			<a href='https://github.com/withoutwax13'><Icon name='github'/></a>
			<a href='https://www.linkedin.com/in/john-patrick-valera-6a1493196/'><Icon name='linkedin'/></a>
		</Segment>
	)
}