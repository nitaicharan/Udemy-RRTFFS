import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from '../../components/Card'
import Container from '../../components/Container'
import LoginForm from '../../components/LoginForm'
import Title from '../../components/Title'
import { ILogin, login as loginThunk } from "../../ducks/Users"

interface ILoginProps {
    login: (a: ILogin) => void
}

class Login extends Component<ILoginProps> {
    render() {
        const { login } = this.props;
        return (
            <Container center>
                <Card>
                    <Title>Login</Title>
                    <LoginForm onSubmit={login} />
                </Card>
            </Container>
        )
    }
}

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) => ({
    login: (payload: any) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)