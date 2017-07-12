import React, { Component } from 'react'
import { connect } from 'react-redux'

import NoReduxFormForm from './no_redux-form_form.component.js'
import ReduxFormForm from './redux-form_form.component.js'
import { sendData } from '../actions'

const mapStateToProps = ({ data }) => {
	return {
		data
	}
}

class App extends Component {
	render() {
		return (
			<div className="app">
				<div className="app-header">
					<h2>Welcome to React</h2>
				</div>
				<NoReduxFormForm />
				<ReduxFormForm />
				<div style={styles.dataDisplay}>
					{JSON.stringify(this.props.data)}
				</div>
			</div>
		)
	}
}

const styles = {
	dataDisplay: {
		'marginTop': '20px'
	}
}

export default connect(mapStateToProps, { sendData })(App)
