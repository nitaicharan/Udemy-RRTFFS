import React, { Component } from 'react';

interface IIntroProps {
    text?: string,
}

interface IIntroState {
    text: string,
    data: number,
}

export class Intro extends Component<IIntroProps, IIntroState> {
    public state = {
        text: "I'm a state text!",
        data: 1,
    }

    render() {
        const text = this.props.text || this.state.text;

        return (
            <p className="App-intro">
                <span>{text}</span>
            </p>
        )
    }
}

export default Intro
