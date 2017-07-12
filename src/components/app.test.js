import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Comp from './app.component.js';
import reducers from '../reducers'

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		(
			<Provider store={createStore(reducers)}>
				<Comp />
			</Provider>
		),
		div);
});
