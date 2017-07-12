import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { sendData } from '../actions'

class ReduxFormForm extends Component {
	onFormSubmit(values) {
		this.props.sendData({
			message: 'Received Redux-Form Data',
			data: values
		})
	}

	renderInput(field) {
		return (
			<div>
				<label>Last Name</label>
				<input {...field.input}
					name="lastName"
					type="text"
					placeholder="Last Name"
				/>
			</div>
		)
	}

	render() {
		return (
			<div>
				<div>This one uses Redux-Form</div>
				{/* handleSubmit is passed as a prop to this form by Redux-Form.
				It handles some stuff for you, but then also takes a submit function that you define and executes it */}
				<form style={styles.form}
					onSubmit={this.props.handleSubmit(this.onFormSubmit.bind(this))}
				>
					<div>   {/* This is the simple way to declare a field */}
						<label>First Name</label>
						<Field
							name="firstName"
							component="input"
							type="text"
							placeholder="First Name"
						/>
					</div>
					<div>  {/* You can also declare a component as a function that returns what you want for custom stuff */}
						<Field
							name="lastName"
							component={this.renderInput}
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

// If you don't need actions or state, you can export this directly!
// This component is connected to the redux state (as far as ReduxForm is concerned)
const ConnectedForm = reduxForm({
	form: 'name'
})(ReduxFormForm)

// Since I want to reference an action, I need to manually connect my ConnectedForm
export default connect(null, { sendData })(ConnectedForm)
