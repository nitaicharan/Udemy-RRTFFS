import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import Button from './Button'
import Center from './Center'
import Input from './Input'

class LoginForm extends Component<InjectedFormProps> {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <Field placeholder="Login" label="Login" name="email" type="email" component={Input} />
                <Field placeholder="Password" label="Password" name="password" type="password" component={Input} />
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