import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from './navigation/Icon';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <div className="container Navigation__container">
                    <ul className="Navigation__list">
                        <li className="Navigation__item">
                            <Link to="/" className="Navigation__link"> 
                                <Icon src={require('./navigation/pokeballs.svg')} atl="My Pokémon" />
                            </Link>
                        </li>
                        <li className="Navigation__item">
                            <Link to="/pokemon" className="Navigation__link">
                                <Icon src={require('./navigation/compass.svg')} alt="All Pokémon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navigation;