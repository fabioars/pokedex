import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import All from './pages/All';
import Search from './pages/Search';

const Router = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={All} />
            <Route exact path="/search" component={Search} />
            <Navigation />
        </div>
    </BrowserRouter>
);

export default Router;