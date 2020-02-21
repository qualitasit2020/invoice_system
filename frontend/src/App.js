import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jwtDecode from 'jwt-decode';
import rootReducer from './reducers/root';
import history from './services/history';
import Routes from './routes/index';
import { setAuthorizationToken, setCurrentUser } from './actions/common/auth';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if(localStorage.getItem('token')) {
    setAuthorizationToken(localStorage.getItem('token'));
    store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('token'))));
}

/////////////


function App() {
  return (
    <Provider store={ store }>
    <Router history={ history }>
      <Routes />
    </Router>
    </Provider>
  );
}

export default App;