import React, { Component } from 'react'


class UserSignIn extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
    }

    render() {

        return (
            <div className="Auth-form-container">
                <form className="Auth-form" >
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