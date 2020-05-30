// react imports
import React from 'react'

// react-redux imports
import { connect } from 'react-redux'

// semantic-ui imports
import { Form, Select, Button } from 'semantic-ui-react'

// project file imports
import { postComment, saveUsername } from '../actions'

const NewChildThread = (props) => {

	// local function states
	const [body, setBody] = React.useState('Your Comment Here')
	const [author, setAuthor] = React.useState('Anonymous')
	const [shouldPopForm, setShouldPopForm] = React.useState(false)

	const [newUsername, setNewUsername] = React.useState(props.username ? false : true)

	// returns correct id for next child
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

	// returns form jsx
	const popForm = () => {
		if (shouldPopForm){
			return (
				<div>
					<br/><hr/><br/>
					<Form size='small'>
						<Form.Field>
							{usernameInput()}
							<br/><br/>
							<label htmlFor='body'>
								Body
							</label>
							<textarea 
								id='body' 
								rows='2' 
								placeholder='Your comment here' 
								onChange={event=>setBody(event.target.value)} 
								value={body}
							/>
						</Form.Field>
						<br/><br/>
						<div 
							className='ui right floated tiny primary button' 
							onClick={()=>{
											const newId = findMyID()
											props.postComment(props.history, newId, body, author)
											if (props.username === null || newUsername === true){props.saveUsername(author)}	
											setShouldPopForm(false)
										}}>
								Pin Reply
						</div>
						<div 
							className='ui right floated tiny button' 
							onClick={()=>setShouldPopForm(false)}>
								Hide Reply Form
						</div>
					</Form>
					<br/><br/>
				</div>
			)
		}
		return (
			<div>
				<div 
					className='ui right floated tiny primary button' 
					onClick={()=>setShouldPopForm(true)}>
						Reply
				</div>
				<br/><br/>
			</div>
		)
	}

	// render
	return (
		popForm()
	)
}

const mapStateToProps = (state) => {
	return {
		mothers: state.ALL_THREADS,
		username: state.SAVED_USERNAME
	}
}

export default connect(mapStateToProps, { postComment, saveUsername })(NewChildThread)