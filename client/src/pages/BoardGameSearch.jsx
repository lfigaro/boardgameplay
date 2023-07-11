import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    `

class BoardGameSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgames: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getBoardGameSearch().then(boardgames => {
            this.setState({
                boardgames: boardgames.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { boardgames, isLoading } = this.state
        console.log('TCL: BoardGameSearch -> render -> boardgames', boardgames)

        return (
            <Wrapper>

            </Wrapper>
        )
    }
}

export default BoardGameSearch