import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Card from '../../components/Card'
import Center from '../../components/Center'
import Container from '../../components/Container'
import Input from '../../components/Input'
import Title from '../../components/Title'

export default class Register extends Component {
    render() {
        return (
            <Container center>
                <Card>
                    <Title>Register</Title>
                    <Input placeholder="Login" label="Login" />
                    <Input placeholder="Password" label="Password" />
                    <Button block={true}>Send</Button>
                    <Center>
                        <Link to="/">Login</Link>
                    </Center>
                </Card>
            </Container>
        )
    }
}
