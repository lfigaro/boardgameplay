import React, { Component } from 'react'
import styled from 'styled-components'
import api from '../api'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

const InputText = styled.input.attrs({
    className: 'form-control',
})``

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})``

class Logo extends Component {
    handleSearchBoardGame = async () => {
        await api.getBoardGameSearch().then(res => {
            console.log('getBoardGameSearch: ', res);
        })
    }

    render() {
        return (
            <form action="/boardgame/search" method="post">
                <input type="text" id="searchTerm" name="searchTerm"/>
                <button type="submit">Buscar</button>
            </form>
        )
    }
}

export default Logo