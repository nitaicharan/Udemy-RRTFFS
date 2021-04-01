import React, { Component } from 'react';

const style = {
    img: {
        borderRadius: '100%'
    },
};
export default class ProfileImg extends Component {
    render() {
        return (
            <div>
                <img style={style.img} src="https://placekitten.com/100/100"/>
            </div>
        )
    }
}
