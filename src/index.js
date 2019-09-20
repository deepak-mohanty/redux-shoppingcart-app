import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer/index';


ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>, document.getElementById('root')
)