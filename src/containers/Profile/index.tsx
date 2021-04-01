import React, { Component } from 'react';
import Button from '../../components/Button';
import ProfileImg from '../../components/ProfileImg';

const style = {
    container: {
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
    },
};
export default class index extends Component {
    render() {
        return (
            <div style={style.container}>
                <ProfileImg />
                <Button>Add</Button>
            </div>
        )
    }
}
