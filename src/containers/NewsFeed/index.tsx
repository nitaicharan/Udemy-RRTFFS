import React, { Component } from 'react'
import Container from '../../components/Container'
import Post from '../../components/Post'

export default class NewsFeed extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div style={{ margin: '0 auto' }}>
                        <Post image={"https://placekitten.com/300/200"} />
                        <Post image={"https://placekitten.com/300/200"} />
                    </div>
                </Container>
            </div>
        )
    }
}