import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            isLoading: true
        }
    }

    render() {
        const handleSubmit = async (e) => {
            this.setState({
                user: null,
                err: null
            });
            localStorage.removeItem('user');
            window.location.href = "/"
        }

        const loggedInUser = localStorage.getItem("user");

        var ret = null
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            ret = 
                <React.Fragment>
                    <Link to="/user/profile" className="nav-link">{foundUser.name}</Link>
                    <Link to="/" className="nav-link"><span onClick={handleSubmit}>Logoff</span></Link>
                </React.Fragment>
        } else {
            ret = 
                <React.Fragment>
                    <Link to="/user/login" className="nav-link">Login</Link>
                    <Link to="/user/signup" className="nav-link">Cadastre-se</Link>
                </React.Fragment>
        }
        return ret
    }
}

export default Login