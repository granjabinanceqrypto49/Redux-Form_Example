import * as types from './types.js'

export function sendData(data) {
	return {
		type: types.SEND_DATA,
		payload: data
	}
}
