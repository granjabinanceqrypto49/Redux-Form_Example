import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker.js'
import App from './components/app.component.js'
import reducers from './reducers'

ReactDOM.render(
	(
		<Provider store={createStore(reducers)}>
			<App />
		</Provider>
	),
	document.getElementById('root')
)

registerServiceWorker()
