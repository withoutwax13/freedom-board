import React from 'react'
import { connect } from 'react-redux'

import { postThread } from '../actions'

const NewMotherThread = (props) => {

	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState('Anonymous')
	const [body, setBody] = React.useState('')

	const onPinButtonClick = () => {
		props.postThread(props.lastMotherID, title, body, author)
		setTitle('')
		setBody('')
		setAuthor('')
	}
	return (
		<div className='ui segment'>
			<div className='ui form'>
				<div className='ui centered header'>New Thread</div>
				<hr/><br/>
				<span>
					<label 
						htmlFor='title' 
						className='ui header'>
							Title
					</label>
					<input 
						type='text' 
						placeholder='Title' 
						id='title'
						onChange={(event)=>setTitle(event.target.value)}
						value={title}/>
					<br/><br/>
					<label 
						htmlFor='body' 
						className='ui header'>
						Body
					</label>
					<textarea 
						id='body' 
						placeholder='Body of your thread here'
						onChange={(event)=>setBody(event.target.value)}
						value={body}/>
					<br/><br/>
					<label 
						htmlFor='author' 
						className='ui header'>
						Author
					</label>
					<input 
						type='text' 
						placeholder='Anonymous' 
						value={author}
						onChange={event=>setAuthor(event.target.value)} 
						id='author'/>
					<br/><br/>
				</span>
				<div className='ui primary button' onClick={onPinButtonClick}>Pin</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		lastMotherID: state.ALL_THREADS.length
	}
}

export default connect(mapStateToProps, { postThread })(NewMotherThread)