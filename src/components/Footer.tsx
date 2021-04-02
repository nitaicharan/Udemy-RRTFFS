import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

const style = {
    footer: {
        display: 'flex',
        backgroundColor: '#eee',
        marginLeft: '-15px',
        marginBottom: '-10px',
        width: 'calc(100% + 30px)'
    },
    button: {
        flex: '1',
        textAlign: 'center',
        padding: '10px 15px',
        cursor: 'pointer'
    },
};

export default class Footer extends Component {
    render() {
        return (
            <div style={style.footer as React.CSSProperties}>
                <div style={style.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                <div style={style.button as React.CSSProperties}><FontAwesomeIcon icon={faThumbsUp} /> Share</div>
            </div>
        );
    }
}
