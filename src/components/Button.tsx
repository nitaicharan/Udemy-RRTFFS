import React, { Component } from 'react';

const style = (block: boolean) => ({
    backgroundColor: "#00D1B2",
    padding: '10px 15px',
    border: '0',
    color: '#FFF',
    borderRadius: '4px',
    width: block ? '100%' : undefined,
});

interface IButton {
    block?: boolean
}
export default class Button extends Component<IButton> {
    render() {
        const { block = false } = this.props;
        return (
            <button {...this.props} style={style(block)} />
        );
    }
}
