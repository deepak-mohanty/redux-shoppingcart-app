import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/index.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducer/index';
// import cartReducers from './reducer/cartReducer';
import  { loadState, saveState } from './localStorage'


const persistedState = loadState();
const store = createStore(
    reducers, 
    persistedState,
    /* any middleware... */
  );

  store.subscribe(()=>{
    saveState(store.getState())
  });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)