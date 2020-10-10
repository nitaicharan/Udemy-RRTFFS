import React, { Component } from 'react';

const style = {
    width: '100%',
    textAlign: 'center',
} as React.CSSProperties;

export default class Center extends Component {
    render() {
        const { children } = this.props;
        return (
            <div {...this.props} style={style}>
                {children}
            </div>
        );
    }
}
