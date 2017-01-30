import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app';

import store from './store';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

ReactDOM.render(
		<Provider store={store}>
		<App />
		</Provider>, 
		document.getElementById('app')
	)

