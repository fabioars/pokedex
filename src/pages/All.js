import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item';
import Loading from '../components/Loading';
import { fetchAll } from '../modules/all';

class All extends Component {
    state = {
        filter: ''
    };
    componentWillMount() {
        const { list, next } = this.props;

        if (list.length === 0) {
            this.props.fetchAll(next);
        }
    }

    loadmoreClicked = e => {
        e.preventDefault();
        const { next } = this.props;
        this.props.fetchAll(next);
    };

    filterHandle = e => {
        const filter = e.target.value;
        this.setState({ filter });
    };

    renderList() {
        const { filter } = this.state;

        const list = this.props.list.filter(pokemon => {
            const id = pokemon.url.split('/').reverse()[1];
            return (
                pokemon.name.toLowerCase().includes(filter.toLowerCase()) ||
                id.toString().includes(filter)
            );
        });

        return (
            <ul className="All__list">
                <input
                    type="search"
                    className="All__filter"
                    placeholder="Filter Pokémon"
                    onChange={this.filterHandle}
                />

                {list.map(pokemon => {
                    const id = pokemon.url.split('/').reverse()[1];

                    return (
                        <Item key={id} number={id}>
                            {pokemon.name}
                        </Item>
                    );
                })}
            </ul>
        );
    }

    renderButton() {
        const { loading } = this.props;

        if (loading) {
            return <Loading />;
        } else {
            return (
                <button
                    className="All__loadmore"
                    onClick={this.loadmoreClicked}
                >
                    Load more
                </button>
            );
        }
    }

    render() {
        return (
            <div className="App__content All">
                <div className="container All__container">
                    {this.renderList()}

                    {this.renderButton()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ all }) => {
    return {
        list: all.pokemon,
        next: all.next,
        loading: all.loading
    };
};

const mapDispatchToProps = {
    fetchAll
};

export default connect(mapStateToProps, mapDispatchToProps)(All);
