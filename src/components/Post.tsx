import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

const style = {
    backgroundColor: "#fff",
    padding: '10px 15px',
    border: '1px solid #ddd',
};

interface IPostProps {
    image: string;
}
export default class Post extends Component<IPostProps> {
    render() {
        const { image } = this.props;
        return (
            <div style={style}>
                <img src={image} />
                <div style={{ display: 'flex', backgroundColor: '#eee', marginLeft: '-15px', marginBottom: '-10px', width: 'calc(100% + 30px)' }}>
                    <div style={{ flex: '1', textAlign: 'center', padding: '10px 15px', cursor: 'pointer' }}><FontAwesomeIcon icon={faThumbsUp} /> Like</div>
                    <div style={{ flex: '1', textAlign: 'center', padding: '10px 15px', cursor: 'pointer' }}><FontAwesomeIcon icon={faThumbsUp} /> Share</div>
                </div>
            </div>
        );
    }
}
