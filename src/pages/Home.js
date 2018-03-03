import React, { Component } from 'react';
import { connect } from 'react-redux';
import NoPokemon from './home/NoPokemon';
import Item from '../components/Item';

class Home extends Component {
    render() {
        const { list } = this.props;

        return (
            <div className="App__content Home">
                <div className="container Home__container">
                    {this.props.count === 0 ? <NoPokemon /> : (
                        <ul className="Home__list">
                            {list.map(pokemon => {
                                return (
                                    <Item key={pokemon.id} number={pokemon.id}>
                                        {pokemon.name}
                                    </Item>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        count: state.pokedex.list.length,
        list: state.pokedex.list
    };
};

export default connect(mapStateToProps)(Home);