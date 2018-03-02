import React from 'react';

const NoPokemon = () => (
    <div className="Home__clean">
        <img src={require('./egg.svg')} alt="Egg" />
        <p>There's no Pokémon here</p>
    </div>
);

export default NoPokemon;