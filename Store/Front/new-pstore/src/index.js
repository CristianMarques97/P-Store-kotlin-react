import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux'
import LoggedClienteReducer from './reducers/logged-client-reducer';
import authReducer from './reducers/auth-reducer'
import drawerReducer from './reducers/drawer-reducer';


const allReducers = combineReducers({
        userLogin: LoggedClienteReducer,
        auth: authReducer,
        drawerState: drawerReducer,
})



const store = createStore(allReducers,window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(<Provider store= {store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
