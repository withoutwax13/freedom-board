import React from 'react'

import NewChildThread from './NewChildThread.js'

const Child = (props) => {

	const { childData, linkHistory } = props

	const shouldComment = () => {
		if (linkHistory.length <= 3){
			return (
				<NewChildThread history={[...linkHistory, childData.id]}/>
			)
		}
	}

	const displayChildrenOfChild = () => {
			if (childData.child.length > 0){
				return (
					<div className='ui comments'>
						{
							childData.child.map(item => {
								const newHistory = [...linkHistory, childData.id]
								return (
									<div className='comment' key={item.id}>
										<Child key={item.id} childData={item} linkHistory={newHistory}/>
									</div>
								)
							})
						}
					</div>
				)
			}
	}

	return (
		<React.Fragment>
			<div className='ui comments'>
				<div className='comment'>
					<div className='avatar'>
						<div className='ui user icon'></div>
					</div>
					<div className='content'>
						<div className='author'>{childData.author}</div>
						<div className='ui segment'>
							<div className='text'>{childData.body}</div>
						</div>
					</div>
				</div>

				<div className='comment form'>
					{shouldComment()}
				</div>
				<div>
					{displayChildrenOfChild()}
				</div>
			</div>
		</React.Fragment>
	)	
}

export default Child