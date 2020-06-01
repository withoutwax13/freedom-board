import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { saveUsername } from '../actions'

const NewUsername = (props) => {

	const [ newName, setNewName ] = React.useState('')
	const [ redirect, setRedirect ] = React.useState(false)

	const saveUsername = () => {
		props.saveUsername(newName)
		setRedirect(true)
	}

	return (
		<div className='ui segment'>
			{(redirect) ? <Redirect to='/'/> : ``}
			<div className='ui form'>
				<input type='text' 
						placeholder='New default username here' 
						value={newName} 
						onChange={event=>setNewName(event.target.value)}/>
			</div>
			<div className='ui message'>
				Note: This will be the default username in this browser other than 'Anonymous'.
			</div>
			<div className='ui primary button' 
				onClick={saveUsername}>
					Save
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.SAVED_USERNAME
	}
}

export default connect(mapStateToProps, { saveUsername })(NewUsername)