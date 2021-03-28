import React, { Component } from 'react';

const style = {
    backgroudColor: "#fff",
    padding: '10px 15px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    width: 'calc(100% - 30px)',
    marginBottom: '10px',
};

const spanStyle = {
    color: '#777',
    fontSize: '10px',
    textTransform: 'uppercase',
    fontWeight: 900,
} as React.CSSProperties

interface IInputProps {
    placeholder?: string;
    label: string;
}

export default class Input extends Component<IInputProps> {
    render() {
        const { label } = this.props;
        return (
            <div>
                <span style={spanStyle}>{label}</span>
                <input {...this.props} style={style} />
            </div>
        );
    };
}
