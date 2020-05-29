// react imports
import React from 'react'

// semantic-ui imports
import { Comment, Icon } from 'semantic-ui-react'

// project file imports
import NewChildThread from './NewChildThread.js'


const Child = (props) => {

	// local function states
	const { childData, linkHistory } = props

	// allowed to create new child if the thread is below 3 levels deep
	const shouldComment = () => {
		if (linkHistory.length <= 3){
			return (
				<NewChildThread 
					history={[...linkHistory, childData.id]}
				/>
			)
		}
	}

	// displays deeper subthreads of the current child
	const displayChildrenOfChild = () => {
			if (childData.child.length > 0){
				return (
					<Comment.Group>
						{
							childData.child.map(item => {
								const newHistory = [...linkHistory, childData.id]
								return (
									<Comment>
										<Child 
											key={item.id} 
											childData={item} 
											linkHistory={newHistory}
										/>	
									</Comment>
								)
							})
						}
					</Comment.Group>
				)
			}
	}

	//render
	return (
		<React.Fragment>
			<Comment>
				<div className='avatar'>
					<Icon name='user'/>
				</div>
				<div className='content'>
					<div className='author'>
						{childData.author}
					</div>
					<div className='ui segment'>
						<div className='text'>
							{childData.body}
						</div>
					</div>
				</div>
			</Comment>

			<div className='comment form'>
				{shouldComment()}
			</div>
			<div>
				{displayChildrenOfChild()}
			</div>
		</React.Fragment>
	)	
}

export default Child