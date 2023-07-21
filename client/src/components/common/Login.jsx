import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



class Login extends Component {
    render() {
        const loggedInUser = localStorage.getItem("user");

        var ret = null
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            ret = 
                <React.Fragment>
                    <Link to="/user/profile" className="nav-link">{foundUser.name}</Link>
                    <Link to="/user/logoff" className="nav-link">Logout</Link>
                </React.Fragment>
        } else {
            ret = 
                <React.Fragment>
                    <Link to="/user/login" className="nav-link">Login</Link>
                    <Link to="/user/signup" className="nav-link">Cadastre-se</Link>
                </React.Fragment>
        }

        return (
            ret
        )
    }
}

export default Login