import React, { Component } from 'react';

const style = {
    backgrouldColor: "#fff",
    padding: '10px 15px',
    border: '1px solid #eee',
};
export default class Card extends Component {
    render() {
        const { children } = this.props;
        return (
            <div style={style}>
                {children}
            </div>
        );
    }
}
