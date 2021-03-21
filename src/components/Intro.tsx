import React, { Component } from 'react';

interface IIntroProps {
    text?: string,
}

interface IIntroState {
    text: string,
    data: number,
}

export default class Intro extends Component<IIntroProps, IIntroState> {
    public state = {
        text: "I'm a state text!",
        data: 1,
    }

    public render() {
        const text = this.props.text || this.state.text;

        return (
            <p onClick={this.handLeClick} className="App-intro">
                <span>{text}</span>
            </p>
        )
    }

    private handLeClick = () => {
        this.setState({text: 'I have been updated!'});
    }
}
