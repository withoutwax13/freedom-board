import React from 'react'
import { combineReducers } from 'redux'

const threadReducer = (threadsList = [
		// Test Threads
		{
			id: 0,
			title: 'A sample thread',
			body: 'Lorem Ipsum dasdasdasd. ADSADadsasdad ndsadadbabdba!!!',
			author: 'testAuthor',
			child: [
				{
					id: 0,
					body: 'Thread 0, Child 0',
					author: 'testAuthor',
					child: []
				},
				{
					id: 1,
					body: 'Thread 0, Child 1',
					author: 'testAuthor',
					child: [
						{
							id: 0,
							body: 'Thread 0, Child 1, Child 0',
							author: 'testAuthor',
							child: [
								{
									id: 0,
									body: 'Thread 0, Child 1, Child 0, Child 0',
									author: 'testAuthor',
									child: [
										{
											id: 0,
											body: 'Thread 0, Child 1, Child 0, Child 0, Child 0',
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
			title: 'A sample thread',
			body: 'Thread 2',
			author: 'testAuthor',
			child: []
		},
		{
			id: 2,
			title: 'A sample thread',
			body: 'Thread 3',
			author: 'anonymous',
			child: []
		}

	], action) => {

	switch(action.type){
		case 'NEW_MOTHER':
			return threadsList.concat([action.payload])
		case 'NEW_CHILD_LEVEL_0':
			return threadsList.map(thread=>{
				if (thread.id === action.payload.HISTORY[0]){
					return {
						...thread,
						child: thread.child.concat([action.payload.newChild])
					}
				}
				return thread
			})
		case 'NEW_CHILD_LEVEL_1':
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
		case 'NEW_CHILD_LEVEL_2':
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
		case 'NEW_CHILD_LEVEL_3':
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
			return threadsList
	}
}

export default combineReducers({
	ALL_THREADS: threadReducer,
})