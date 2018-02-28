import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store';
import Router from './router';

const App = () => (
    <Provider store={store}>
        <Router />
    </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'));
