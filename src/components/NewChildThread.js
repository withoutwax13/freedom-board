// react imports
import React from 'react'

// react-redux imports
import { connect } from 'react-redux'

// semantic-ui imports
import { Form } from 'semantic-ui-react'

// project file imports
import { postComment } from '../actions'

const NewChildThread = (props) => {

	// local function states
	const [body, setBody] = React.useState('Your Comment Here')
	const [author, setAuthor] = React.useState('Anonymous')
	const [shouldPopForm, setShouldPopForm] = React.useState(false)

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

	// returns form jsx
	const popForm = () => {
		if (shouldPopForm){
			return (
				<div>
					<br/><hr/><br/>
					<Form size='small'>
						<Form.Field>
							<label htmlFor='author'>
								Author
							</label>
							<input 
								type='text' 
								id='author' 
								placeholder='Username' 
								onChange={event=>{setAuthor(event.target.value)}} 
								value={author}
							/>
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
											setShouldPopForm(false)
											props.postComment(props.history, newId, body, author)
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
		mothers: state.ALL_THREADS
	}
}

export default connect(mapStateToProps, { postComment })(NewChildThread)