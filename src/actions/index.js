// action creators

// for posting new mother thread
export const postThread = (id, title, body, author) => {
	return {
		type: 'NEW_MOTHER',
		payload: {
			id,
			title,
			body,
			author,
			child: []
		}
	}
}


// for posting new child on any thread or sub-thread
export const postComment = (HISTORY, id, body, author) => {
	return {
		type: 'NEW_CHILD',
		payload: {
			newChild: {
				id: id,
				body: body,
				author: author,
				child: []
			},
				HISTORY: HISTORY
		}
	}	
}

export const saveUsername = (new_username) => {
	return {
		type: 'SAVE_USERNAME',
		payload: new_username
	}
}