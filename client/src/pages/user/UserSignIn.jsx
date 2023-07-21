import React, { Component } from 'react'
import api from '../../api'
import bcrypt from 'bcryptjs'


class UserSignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            err: ''
        }
    }

    render() {
        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                var user = {}
                console.log('pass: ', bcrypt.hashSync(e.target[1].value, 10))
                user.user = e.target[0].value

                await api.checkUser(user)
                    .then(userRes => {
                        console.log('userRes: ', userRes)
                        if (bcrypt.compareSync(e.target[1].value, userRes.data[0].pass)) {
                            this.setState({
                                user: userRes.data[0],
                                err: ''
                            })
                            // store the user in localStorage
                            localStorage.setItem('user', JSON.stringify(userRes.data[0]))

                        } else {
                            this.setState({
                                user: '',
                                err: 'User not found'
                            })
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        this.setState({
                            user: '',
                            err: error
                        })
                    });
            } catch (err) {
                this.setState({
                    user: '',
                    err: err
                })
            }
        };

        return (
            <div className="Auth-form-container">
                <form className="Auth-form" method="post" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Login</h3>
                        <div className="form-group mt-3">
                            <label>Email / Usuário</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Digite seu email ou usuário"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Digite a senha"
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Esqueceu a <a href="#">senha?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignIn