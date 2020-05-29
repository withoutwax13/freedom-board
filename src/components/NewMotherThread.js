import React from 'react'
import { connect } from 'react-redux'

import { Segment, Header, Form, Message, Button } from 'semantic-ui-react'

import { postThread } from '../actions'

const NewMotherThread = (props) => {

	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState('Anonymous')
	const [body, setBody] = React.useState('')

	const [shouldPopSuccess, setShouldPopSuccess] = React.useState(false)

	const onPinButtonClick = () => {
		props.postThread(props.lastMotherID, title, body, author)
		setTitle('')
		setBody('')
		setAuthor('')
		setShouldPopSuccess(true)
	}

	const popSuccess = () => {
		return (
			<Message 
				success
				header='New Thread Pinned!'
				content='See thread list!'
			/>
		)
	}

	if (shouldPopSuccess){
		window.setTimeout(()=>setShouldPopSuccess(false), 4000)
	}

	return (
		<Segment>
			<Form success>
				<Header dividing textAlign='center'>New Thread</Header>
				<br/>
					{shouldPopSuccess ? popSuccess() : ``}
				<Form.Field>
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
				</Form.Field>
				<Button primary onClick={onPinButtonClick}>Pin</Button>
			</Form>
		</Segment>
	)
}

const mapStateToProps = (state) => {
	return {
		lastMotherID: state.ALL_THREADS.length
	}
}

export default connect(mapStateToProps, { postThread })(NewMotherThread)