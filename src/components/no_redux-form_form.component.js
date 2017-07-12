import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sendData } from '../actions'

class NoReduxFormForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstName: '',
			lastName: ''
		}
	}

	handleFirstNameChange(event) {
		this.setState({
			firstName: event.target.value
		})
	}

	handleLastNameChange(event) {
		this.setState({
			lastName: event.target.value
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		this.props.sendData({
			message: 'Received No-Redux-Form data',
			data: {
				firstName: this.state.firstName,
				lastName: this.state.lastName
			}
		})
	}

	render() {
		return (
			<div>
				<div>This one does NOT use Redux-Form</div>
				<form onSubmit={(e) => this.handleSubmit(e)} style={styles.form}>
					<div>
						<label>First Name</label>
						<input
							value={this.state.firstName}
							onChange={(e) => this.handleFirstNameChange(e)}
							name="firstName"
							type="text"
							placeholder="First Name"
						/>
					</div>
					<div>
						<label>Last Name</label>
						<input
							value={this.state.lastName}
							onChange={(e) => this.handleLastNameChange(e)}
							name="lastName"
							type="text"
							placeholder="Last Name"
						/>
					</div>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

const styles = {
	dataDisplay: {
		'marginTop': '20px'
	},
	form: {
		'marginBottom': '40px'
	}
}

export default connect(null, { sendData })(NoReduxFormForm)
