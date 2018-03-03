import React from 'react';
import { Link } from 'react-router-dom';

const NoPokemon = () => (
    <div className="Home__clean">
        <img src={require('./egg.svg')} alt="Egg" />
        <p>There's no Pokémon here</p>
        <Link to="/pokemon" className="Button">Search</Link>
    </div>
);

export default NoPokemon;