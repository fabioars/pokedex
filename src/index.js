import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import Router from './router';
import 'normalize.css/normalize.css';
import './index.css';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
