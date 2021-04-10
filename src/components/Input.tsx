import React, { InputHTMLAttributes } from 'react';
import { WrappedFieldProps } from 'redux-form';

const style = {
    backgroundColor: "#fff",
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
    label: string;
    placeholder: string;
}

const Input: React.FunctionComponent<WrappedFieldProps & IInputProps> = props => {
    const { label } = props;
    return (
        <div>
            <span style={spanStyle}>{label}</span>
            <input {...props} style={style} />
        </div>
    );
}

export default Input;