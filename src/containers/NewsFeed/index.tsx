import React, { Component } from 'react'
import Container from '../../components/Container'
import Post from '../../components/Post'

export default class NewsFeed extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <Post />
                    </div>
                </Container>
            </div>
        )
    }
}