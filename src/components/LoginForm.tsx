import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { InjectedFormProps, reduxForm } from 'redux-form'
import Button from './Button'
import Center from './Center'
import Input from './Input'

class LoginForm extends Component<InjectedFormProps> {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Input placeholder="Login" label="Login" />
                <Input placeholder="Password" label="Password" />
                <Button block={true}>Send</Button>
                <Center>
                    <Link to="/register">Registry</Link>
                </Center>
            </form>
        )
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm)