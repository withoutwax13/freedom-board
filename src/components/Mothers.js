import React from 'react'
import { connect } from 'react-redux'

import Child from './Child.js'
import NewChildThread from './NewChildThread.js'


const Mothers = (props) => {
	
	const { mothers } = props

	console.log(mothers)

	const displayChildrenOfMother = (mother, motherHistory) => {
		if (mother.child.length > 0){
			return (
				<React.Fragment>
					<div className='ui dividing header'>Comments</div>
					{mother.child.map(item => <Child key={item.id} childData={item} linkHistory={motherHistory}/>)}
				</React.Fragment>
			)
		}
	}

	const displayMothers = () => {
		return (
			<React.Fragment>
				{mothers.map(mother => {
					const motherHistory = [mother.id, ]
					return (
						<div className='ui segment' key={mother.id}>
							<div className='ui dividing header'>{mother.title}</div>
							<div className='ui tiny header'>by: <span style={{color: 'blue'}}>{mother.author}</span></div>
							<div className='text'>
								<p>{mother.body}</p>
							</div>
							<div>
								<NewChildThread history={motherHistory}/>
							</div>
							<div className='ui comments'>
								{displayChildrenOfMother(mother, motherHistory)}
							</div>
						</div>
					)
				})}
			</React.Fragment>
		)
	}

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