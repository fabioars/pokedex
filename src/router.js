import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import All from './pages/All';
import Pokemon from './pages/Pokemon';

const Router = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={All} />
            <Route exact path="/pokemon/:id" component={Pokemon} />
            <Navigation />
        </div>
    </BrowserRouter>
);

export default Router;