import React, { Component } from 'react';
import axios from 'axios';
import iziToast from 'izitoast';
import { Link } from 'react-router-dom';

class Profile extends Component {

    onAbilityClick = async url => {
        const result = await axios.get(url);

        if (result) {
            iziToast.show({
                message: result.data.effect_entries[0].short_effect
            });
        }
    };

    onRelease = e => {
        e.preventDefault();
        this.props.onRelase(this.props.pokemon.id);
    };

    render() {
        const { pokemon } = this.props;

        return (
            <div className="Profile">
                <div className="Profile__info">
                    <div className="Profile__sprite">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </div>
                    <div className="Profile__action">
                        <span className="Profile__name">{pokemon.name}</span>
                        <button className="Button" onClick={this.onRelease}>
                            Release
                        </button>
                    </div>
                </div>
                <table className="Profile__table">
                    <tbody>
                        <tr>
                            <td>{'Weight'.toUpperCase()}</td>
                            <td align="right">{pokemon.weight}</td>
                        </tr>
                        <tr>
                            <td>{'Size'.toUpperCase()}</td>
                            <td align="right">{pokemon.height}</td>
                        </tr>
                        <tr>
                            <td>{'Type(s)'.toUpperCase()}</td>
                            <td align="right">
                                {pokemon.types.map(({ type }) => {
                                    const { name } = type;
                                    return (
                                        <span key={name}>
                                            <Link to={`/type/${name}`}>
                                                {name.toUpperCase()}
                                            </Link>{' '}
                                        </span>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="Profile__table">
                    <tbody>
                        {[...pokemon.stats].reverse().map(({ stat, base_stat }) => {
                            return (
                                <tr key={stat.name}>
                                    <td>{stat.name.toUpperCase()}</td>
                                    <td align="right">{base_stat}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                <table className="Profile__table">
                    <thead>
                        <tr>
                            <th>Abilities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pokemon.abilities.map(({ ability }) => {
                            return (
                                <tr key={ability.name}>
                                    <td>
                                        <a
                                            onClick={e => {
                                                e.preventDefault();
                                                this.onAbilityClick(
                                                    ability.url
                                                );
                                            }}
                                        >
                                            {ability.name.toUpperCase()}
                                        </a>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

Profile.defaultProps = {
    onRelase: () => {}
};

export default Profile;
