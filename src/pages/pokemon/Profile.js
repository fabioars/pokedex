import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
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
                                {pokemon.types.map(type => {
                                    const { name } = type.type;
                                    return (<span key={name}>
                                        <Link to={`/type/${name}`}>{name.toUpperCase()}</Link>{' '}
                                        </span>
                                    );
                                })}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="Profile__table">
                    <tbody>
                        {[...pokemon.stats].reverse().map(stats => {
                            return (
                                <tr key={stats.stat.name}>
                                    <td>{stats.stat.name.toUpperCase()}</td>
                                    <td align="right">{stats.base_stat}</td>
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
