import React from 'react';
import './scss/index.scss';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import customHistory from './history';

import store from './redux/store';
import App from './App';

ReactDOM.render(
	<Provider store={store}>
		<Router history={customHistory}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);
