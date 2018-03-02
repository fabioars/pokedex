import React, { Component } from 'react';
import NoPokemon from './home/NoPokemon';

class Home extends Component {
    render() {
        return (
            <div className="App__content Home">
                <div className="container Home__container">
                    <NoPokemon />
                </div>
            </div>
        );
    }
}

export default Home;