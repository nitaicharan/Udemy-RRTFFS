import React, { Component } from 'react';

const style = {
    color: '#555',
};
export default class Title extends Component {
    render() {
        const { children } = this.props;
        return (
            <h2 {...this.props} style={style} />
        );
    }
}
