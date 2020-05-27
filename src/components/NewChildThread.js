import React from 'react'
import { connect } from 'react-redux'

import { postComment } from '../actions'

const NewChildThread = (props) => {

	const [body, setBody] = React.useState('Your Comment Here')
	const [author, setAuthor] = React.useState('Anonymous')

	const findMyID = () => {
		let current = props.mothers[props.history[0]]
		if (props.history.length > 1){	
			for (let i = 1; i < props.history.length; i++){
				current = current.child[props.history[i]]
			}
			return current.child.length
		}
		return current.child.length
	}

	return (
		<div className='ui form'>
			<br/>
			<textarea rows='2' placeholder='Your Comment Here' onChange={event => setBody(event.target.value)} value={body}/>
				<br/>
				by: 
			<input type='text' placeholder='Anonymous' onChange={event => setAuthor(event.target.value)} value={author}/>
				<br/><br/>
			<div className='ui small primary right floated button' 
				onClick={()=>{
					const id = findMyID()
					props.postComment(props.history, id, body, author)
					console.log(props.mothers)
				}}>
				<i className='ui write icon'/>
					Comment
			</div>
				<br/><br/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		mothers: state.ALL_THREADS
	}
}

export default connect(mapStateToProps, { postComment })(NewChildThread)