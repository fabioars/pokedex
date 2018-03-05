import React, { Component } from 'react';
import axios from 'axios';
import Item from '../components/Item';
import Loading from '../components/Loading';

class Types extends Component {
    state = {
        error: false,
        loading: false,
        list: []
    };

    componentWillMount() {
        this.loadContent();
    }

    async loadContent() {
        const { name } = this.props.match.params;
        this.setState({ loading: true });

        const result = await axios.get(
            `https://pokeapi.co/api/v2/type/${name}`
        );

        if (result) {
            this.setState({
                list: result.data.pokemon,
                loading: false,
                error: false
            });
        } else {
            this.setState({
                loading: false,
                error: true
            });
        }
    }

    renderList() {
        return this.state.list.map(({ pokemon }) => {
            const id = pokemon.url.split('/').reverse()[1];
            
            return (
                <Item key={id} number={id}>
                    {pokemon.name}
                </Item>
            );
        });
    }

    render() {
        if(this.state.error) {
            this.loadContent();
        }

        return (
            <div className="App__content Types">
                <div className="container">
                    <ul className="Types__list">
                        {this.state.loading ? <Loading /> : null}
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Types;
