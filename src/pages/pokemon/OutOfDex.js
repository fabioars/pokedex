import React from 'react';

const OutOfDex = ({ id, name }) => (
    <div>
        <div className="Pokemon__out">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        </div>
        <button className="button Pokemon__add">Add to dex</button>
    </div>
);

OutOfDex.defaultProps = {
    name: 'Pokémon'
};

export default OutOfDex;