
export const postThread = (id, title, body, author = 'Anonymous') => {
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

export const postComment = (HISTORY, id, body, author) => {

	// idea of implementation: first argument will be the history of the specific child's nodes
	//							second argument will be an object consisted of id, body, author
		switch(HISTORY.length){
			case 1:
				console.log('level 0', HISTORY)
				return {
					type: 'NEW_CHILD_LEVEL_0',
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
			case 2:
				return {
					type: 'NEW_CHILD_LEVEL_1',
					payload: {
						newChild: {
							id,
							body,
							author,
							child: []
						},
						HISTORY: HISTORY
					}
				}
			case 3:
				return {
					type: 'NEW_CHILD_LEVEL_2',
					payload: {
						newChild: {
							id,
							body,
							author,
							child: []
						},
						HISTORY: HISTORY
					}
				}
			case 4:
				return {
					type: 'NEW_CHILD_LEVEL_3',
					payload: {
						newChild: {
							id,
							body,
							author,
							child: []
						},
						HISTORY: HISTORY
					}
				}
			default:
				return null
		}
	}