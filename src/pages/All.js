import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './all/Item';
import Loading from '../components/Loading';
import { fetchAll } from '../modules/all';

class All extends Component {
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

    renderList() {
        const { list } = this.props;

        return (
            <ul className="All__list">
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
