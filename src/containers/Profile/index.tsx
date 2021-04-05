import React, { Component } from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';
import ProfileImg from '../../components/ProfileImg';

const style = {
    container: {
        padding: '15px',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px'
    },
};
export default class index extends Component {
    render() {
        return (
            <div style={style.container}>
                <div style={style.row}>
                    <ProfileImg />
                    <Button>Add</Button>
                </div>
                <div style={style.row}>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                </div>
                <div style={style.row}>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                    <Card><img src="https://placekitten.com/100/100" /></Card>
                </div>
            </div>
        )
    }
}
