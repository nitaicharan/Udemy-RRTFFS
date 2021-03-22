import React, { Component } from 'react';

interface IIntroProps {
    text: string,
}

export class Intro extends Component<IIntroProps> {
    render() {
        const {text } = this.props;

        return (
            <p className="App-intro">
                <span>{text}!</span>
            </p>
        )
    }
}

export default Intro
