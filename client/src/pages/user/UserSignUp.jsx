import React, { Component } from 'react'
import api from '../../api'

class UserSignUp extends Component {
    render() {
        let handleSubmit = async (e) => {
            e.preventDefault();
            try {
                var user = {}
                user.email = e.target[0].value
                user.usuario = e.target[1].value
                user.nome = e.target[2].value
                user.cidade = e.target[3].value
                user.senha = e.target[4].value

                await api.saveUser(user).then(userRes => {
                    this.setState({
                        user: userRes.data
                    })
                })
            } catch (err) {
                console.log(err);
            }
        };

        return (
            <div className="Auth-form-container">
                <form className="Auth-form" method="post" onSubmit={handleSubmit}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Cadastre-se</h3>
                        <div className="form-group mt-3">
                            <label>Email</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Digite seu email"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Usuário</label>
                            <input
                                type="user"
                                className="form-control mt-1"
                                placeholder="Digite seu usuário"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Nome</label>
                            <input
                                type="nome"
                                className="form-control mt-1"
                                placeholder="Digite seu nome completo"
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Cidade</label>
                            <input
                                type="nome"
                                className="form-control mt-1"
                                placeholder="Digite o nome de sua cidade"
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
                        <div className="form-group mt-3">
                            <label>Repita a Senha</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Digite a senha novamente"
                            />
                        </div>

                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Cadastrar
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Já tem um <a href="#">usuário?</a>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserSignUp