import React, { Component } from 'react';
import OutOfDex from './pokemon/OutOfDex';

class Pokemon extends Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        console.log(id);
    }

    render() {
        const { id } = this.props.match.params;

        return (
            <div className="App__content">
                <div className="container">
                    <OutOfDex id={id} />
                </div>
            </div>
        );
    }
}

export default Pokemon;