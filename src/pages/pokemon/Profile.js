import React, { Component } from 'react';

class Profile extends Component {

    onRelease = e => {
        e.preventDefault();
        this.props.onRelase(this.props.pokemon.id);
    }

    render() {
        const { pokemon } = this.props;

        return (
            <div className="Profile">
                <div className="Profile__info">
                    <div className="Profile__sprite">
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                    <div className="Profile__action">
                        <span className="Profile__name">{pokemon.name}</span>
                        <button className="Button" onClick={this.onRelease}>Release</button>
                    </div>
                </div>
            </div>
        );
    }
}

Profile.defaultProps = {
    onRelase: () => {}
};

export default Profile;