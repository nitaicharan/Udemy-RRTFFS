import React, { Component } from 'react'
import Card from '../../components/Card'
import Container from '../../components/Container'
import LoginForm from '../../components/LoginForm'
import Title from '../../components/Title'

export default class Login extends Component {
    render() {
        return (
            <Container center>
                <Card>
                    <Title>Login</Title>
                    <LoginForm />
                </Card>
            </Container>
        )
    }
}