import React, { Component } from 'react';

const style = {
    backgroudColor: "#00D1B2",
    padding: '10px 15px',
    border: '0',
    color: '#FFF',
    borderRadius: '4px',
};
export default class Button extends Component {
    render() {
        return (
            <button {...this.props} style={style} />
        );
    }
}
