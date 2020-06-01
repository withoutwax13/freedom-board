import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Menu, Button } from 'semantic-ui-react'

const Header = (props) => {
	
	const [ activeItem, setActiveItem ] = React.useState('Threads')

	const handleItemClick = (event, { name }) => {
		setActiveItem(name)
	}

	return (
		<div className='ui segment'>
	        <Menu pointing secondary>
		        <Link to='/'>
		          <Menu.Item
		            name='Threads'
		            active={activeItem === 'Threads'}
		            onClick={handleItemClick}
		          />
		        </Link>
		        <Link to='/new'>
		          <Menu.Item
		            name='New'
		            active={activeItem === 'New'}
		            onClick={handleItemClick}
		          />
		        </Link>
		        <Link to='/about'>
		          <Menu.Item
		            name='About'
		            active={activeItem === 'About'}
		            onClick={handleItemClick}
		          />
		        </Link>
	          <Menu.Menu position='right'>
	          	<Menu.Item>
	          		<h4>
	          			{props.username}
	          		</h4>
	          	</Menu.Item>
	            <Link to='/change_name'>
	            	<Button size='tiny' color='black'>Change Name</Button>
	          	</Link>
	          </Menu.Menu>
	        </Menu>
      	</div>
	)
}

const mapStateToProps = (state) => {
	return {
		username: state.SAVED_USERNAME
	}
}

export default connect(mapStateToProps)(Header)