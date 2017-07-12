import * as types from '../actions/types.js'

export default (state='No Data Has Been Submitted', action) => {
	switch(action.type) {
		case types.SEND_DATA:
			return action.payload
		default:
			return state
	}
}
