//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
//import promise from 'redux-promise';
import { promise } from 'redux-promise'
//react router imports
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//components
import App from './components/App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

const application = (
  <Provider store={store}>
    <App />
  </Provider>
)

const createStoreWithMiddleware = applyMiddleware()(createStore);

//switch uses most specific route that matches, top down.

ReactDOM.render(application, document.getElementById('root'));
registerServiceWorker();
