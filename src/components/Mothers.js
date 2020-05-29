// react imports
import React from 'react'

// react-redux imports
import { connect } from 'react-redux'

// semantic-ui imports
import { Comment, Header, Segment, Icon } from 'semantic-ui-react'

// project file imports
import Child from './Child.js'
import NewChildThread from './NewChildThread.js'


const Mothers = (props) => {
	
	// ALL_THREADS from the redux store	
	const { mothers } = props

	// display all child threads of the mother threads
	const displayChildrenOfMother = (mother, motherHistory) => {
		if (mother.child.length > 0){
			return (
				<React.Fragment>
					<Header dividing>
						Comments
					</Header>
					{mother.child.map(item => <Child 
												key={item.id} 
												childData={item} 
												linkHistory={motherHistory}
												/>
					)}
				</React.Fragment>
			)
		}
	}

	// show all the mother threads on the redux store
	const displayMothers = () => {
		return (
			<React.Fragment>
				{mothers.map(mother => {
					const motherHistory = [mother.id, ]
					return (
						<Segment key={mother.id}>
							<Header dividing as='h2'>{mother.title}</Header>
							<Header as='h5'>by: <span style={{color: 'blue'}}>{mother.author}</span></Header>
							<div className='text'>
								<p><Icon name='quote left'/> {mother.body} <Icon name='quote right'/></p>
							</div>
							<div>
								<NewChildThread history={motherHistory}/>
							</div>
							<Comment.Group>
								{displayChildrenOfMother(mother, motherHistory)}
							</Comment.Group>
						</Segment>
					)
				})}
			</React.Fragment>
		)
	}

	// render
	return (
		<div className='motherthreads'>
			{ displayMothers() }
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		mothers: state.ALL_THREADS
	}
}

export default connect(mapStateToProps)(Mothers)