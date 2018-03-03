import React, { Component } from 'react';
import Loading from '../../components/Loading';

class OutOfDex extends Component {
    render() {
        const { id, name, onCatchClick, isLoading } = this.props;

        return (
            <div>
                <div className="Pokemon__out">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                        alt={name}
                    />
                </div>
                {isLoading ? (
                    <Loading animation={'catch'} />
                ) : (
                    <button
                        className="Button Pokemon__add"
                        onClick={e => {
                            e.preventDefault();
                            onCatchClick(id);
                        }}
                    >
                        Catch!
                    </button>
                )}
            </div>
        );
    }
}

OutOfDex.defaultProps = {
    name: 'Pokémon',
    onCatchClick: () => {}
};

export default OutOfDex;
