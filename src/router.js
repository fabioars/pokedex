import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import All from './pages/All';
import Pokemon from './pages/Pokemon';
import Types from './pages/Types';

const Router = () => (
    <BrowserRouter>
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon" component={All} />
            <Route exact path="/pokemon/:id" component={Pokemon} />
            <Route exact path="/type/:name" component={Types} />
            <Navigation />
        </div>
    </BrowserRouter>
);

export default Router;