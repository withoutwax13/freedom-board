// redux imports
import { combineReducers } from 'redux'
import update from 'immutability-helper'

import { INITIAL_THREAD } from './INITIAL_STATE'

const threadReducer = (threadsList = INITIAL_THREAD() , action) => {

	switch(action.type){
		case 'NEW_MOTHER':
			return threadsList.concat([action.payload])

		case 'ON_DEVELOPMENT_RECURSION_SOLUTION_FOR_NEW_CHILD':

			return null

		// limits to only 3 sub-threads deep
		case 'NEW_CHILD':
			switch(action.payload.HISTORY.length){
				case 1:
					return update(threadsList, {[action.payload.HISTORY[0]]: {child: {$push: [action.payload.newChild]}}})
				case 2:
					return update(threadsList, {[action.payload.HISTORY[0]]: {child: {[action.payload.HISTORY[1]]: {child: {$push: [action.payload.newChild]}}}}})
				case 3:
					return update(threadsList, {[action.payload.HISTORY[0]]: {child: {[action.payload.HISTORY[1]]: {child: {[action.payload.HISTORY[2]]: {child: {$push: [action.payload.newChild]}}}}}}})
				case 4:
					return update(threadsList, {[action.payload.HISTORY[0]]: {child: {[action.payload.HISTORY[1]]: {child: {[action.payload.HISTORY[2]]: {child: {[action.payload.HISTORY[3]]: {child: {$push: [action.payload.newChild]}}}}}}}}})
				default:
					return threadsList
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