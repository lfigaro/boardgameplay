import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/user/login" className="nav-link">
                    Login
                </Link>
                <Link to="/user/signup" className="nav-link">
                    Cadastre-se
                </Link>
            </React.Fragment>
        )
    }
}

export default Login