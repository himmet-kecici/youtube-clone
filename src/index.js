import ReactDOM from 'react-dom'
import React from 'react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './base.scss'
import { Provider } from 'react-redux'
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'))