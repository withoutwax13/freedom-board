// redux imports
import { combineReducers } from 'redux'

const threadReducer = (threadsList = [
		// Test Threads
		{
			id: 0,
			title: 'This is a React App',
			body: 'This app was built using React and Redux.',
			author: 'withoutwax13',
			child: [
				{
					id: 0,
					body: 'The UI is minimal.',
					author: 'withoutwax13',
					child: []
				},
				{
					id: 1,
					body: 'The developer used some basic semantic-ui',
					author: 'withoutwax13',
					child: [
						{
							id: 0,
							body: 'Cool!',
							author: 'testAuthor',
							child: [
								{
									id: 0,
									body: 'Thank you!',
									author: 'withoutwax13',
									child: [
										{
											id: 0,
											body: 'You\'re awesome!',
											author: 'testAuthor',
											child: []
										}
									]
								}
							]
						}
					]
				}		
			]
		},
		{
			id: 1,
			title: 'Limitation of this App',
			body: 'Data does not persist on this app',
			author: 'testAuthor',
			child: []
		},
		{
			id: 2,
			title: 'Portfolio Project',
			body: 'Its simple yet so cool, right?',
			author: 'anonymous',
			child: []
		}

	], action) => {

	switch(action.type){
		case 'NEW_MOTHER':
			return threadsList.concat([action.payload])

		case 'ON_DEVELOPMENT_RECURSION_SOLUTION_FOR_NEW_CHILD':

			return null

		// limits to only 3 sub-threads deep
		case 'NEW_CHILD':
			switch(action.payload.HISTORY.length){
				case 1:
					return threadsList.map(thread=>{
						if (thread.id === action.payload.HISTORY[0]){
							return {
								...thread,
								child: thread.child.concat([action.payload.newChild])
							}
						}
						return thread
					})
				case 2:
					return threadsList.map(thread => {
						if (thread.id === action.payload.HISTORY[0]){
							return {
								...thread,
								child: thread.child.map(item=>{
									if (item.id === action.payload.HISTORY[1]){
										return {
											...item,
											child: item.child.concat([action.payload.newChild])
										}
									}
									return item
								})
							}
						}
						return thread
					})
				case 3:
					return threadsList.map(thread=>{
						if (thread.id === action.payload.HISTORY[0]){
							return {
								...thread,
								child: thread.child.map(item=>{
									if (item.id === action.payload.HISTORY[1]){
										return {
											...item,
											child: item.child.map(item_deep=>{
												if (item_deep.id === action.payload.HISTORY[2]){
													return {
														...item_deep,
														child: item_deep.child.concat([action.payload.newChild])
													}
												}
												return item_deep
											})
										}
									}
									return item
								})
							}
						}
						return thread
					})
				case 4:
					return threadsList.map(thread=>{
						if (thread.id === action.payload.HISTORY[0]){
							return {
								...thread,
								child: thread.child.map(item=>{
									if (item.id === action.payload.HISTORY[1]){
										return {
											...item,
											child: item.child.map(item_deep=>{
												if (item_deep.id === action.payload.HISTORY[2]){
													return {
														...item_deep,
														child: item_deep.child.map(item_deeper=>{
															if (item_deeper.id === action.payload.HISTORY[3]){
																return {
																	...item_deeper,
																	child: item_deeper.child.concat([action.payload.newChild])
																}
															}
															return item_deeper
														})
													}
												}
												return item_deep
											})
										}
									}
									return item
								})
							}
						}
						return thread
					})
				default:
					return null
			}
		default:
			return threadsList
	}
}

const usernameReducer = (saved_username = null, action) => {
	if (action.type === 'SAVE_USERNAME'){
		return action.payload
	}
	return saved_username
}

export default combineReducers({
	ALL_THREADS: threadReducer,
	SAVED_USERNAME: usernameReducer
})