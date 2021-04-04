import React, { Component } from 'react';

const style = {
    backgroundColor: "#fff",
    padding: '10px 15px',
    border: '1px solid #ddd',
};
export default class Post extends Component {
    render() {
        const { children } = this.props;
        return (
            <div style={style}>
                {children}
            </div>
        );
    }
}
