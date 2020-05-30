import React from 'react'
import { connect } from 'react-redux'

import { Segment, Header, Form, Message, Button, Select } from 'semantic-ui-react'

import { postThread, saveUsername } from '../actions'

const NewMotherThread = (props) => {

	const [title, setTitle] = React.useState('')
	const [author, setAuthor] = React.useState('Anonymous')
	const [body, setBody] = React.useState('')

	const [shouldPopSuccess, setShouldPopSuccess] = React.useState(false)
	const [newUsername, setNewUsername] = React.useState(props.username ? false : true)

	const onPinButtonClick = () => {
		props.postThread(props.lastMotherID, title, body, author)
		if (props.username===null || newUsername===true){
			props.saveUsername(author)
			setNewUsername(false)
		}
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
				content='NOTE: Your username entered will be permanent for this browser.'
			/>
		)
	}

	const nullCaseUsernameInput = () => {
		return (
			<React.Fragment>
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
			</React.Fragment>
		)
	}

	const trueCaseUsernameInput = () => {
		const usernameOptions = [
			{key: 'anon', value: 'Anonymous', text: 'Anonymous'},
			{key: 'saved', value: props.username, text: props.username}
		]
		return (
			<React.Fragment>
					<label 
							htmlFor='author' 
							className='ui header'>
							Author
					</label>
					<Select
						options={usernameOptions}
						placeholder='Select your username'
						onSelect={event=>setAuthor(event.target.value)} 
						id='author'/>
					<br/>
					<br/>
					<Button secondary size='tiny' floated='right' onClick={()=>setNewUsername(true)}>Change Default Username</Button>
			</React.Fragment>
		)
	}

	const usernameInput = () => {
		
		if (!props.username){
			return (
				nullCaseUsernameInput()
			)
		}
		else {
			if (newUsername){
				return nullCaseUsernameInput()
			}else{
				return trueCaseUsernameInput()
			}
		}
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
					{usernameInput()}
					<br/><br/>
				</Form.Field>
				<Button primary onClick={onPinButtonClick}>Pin</Button>
			</Form>
		</Segment>
	)
}

const mapStateToProps = (state) => {
	return {
		lastMotherID: state.ALL_THREADS.length,
		username: state.SAVED_USERNAME
	}
}

export default connect(mapStateToProps, { postThread, saveUsername })(NewMotherThread)