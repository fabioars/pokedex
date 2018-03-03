import React, { Component } from 'react';
import { connect } from 'react-redux';
import OutOfDex from './pokemon/OutOfDex';
import Profile from './pokemon/Profile';
import { fetchPokemon } from '../modules/pokedex';
import { findById } from '../utils';

class Pokemon extends Component {
    catchClickHandle = id => {
        this.props.fetch(id);
    };

    render() {
        const { id } = this.props.match.params;
        const { loading, isInDex, pokemon } = this.props;

        return (
            <div className="App__content">
                <div className="container">
                    {!isInDex ? (
                        <OutOfDex
                            id={id}
                            isLoading={loading}
                            onCatchClick={this.catchClickHandle}
                        />
                    ) : (
                        <Profile pokemon={pokemon} />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const { list, loading } = state.pokedex;
    const { found, result} = findById(list, parseInt(id, 10));

    return {
        isInDex: found,
        pokemon: result,
        loading: loading
    };
};

const mapDispatchToProps = {
    fetch: fetchPokemon
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
