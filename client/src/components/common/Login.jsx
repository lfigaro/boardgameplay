import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Login extends Component {
    render() {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            
        }

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