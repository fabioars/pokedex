import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const Router = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Navigation />
        </div>
    </BrowserRouter>
);

export default Router;