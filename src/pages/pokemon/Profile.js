import React, { Component } from 'react';

class Profile extends Component {
    render() {
        const { pokemon } = this.props;
        
        return (
            <div>
                {pokemon.name}
            </div>
        );
    }
}

export default Profile;