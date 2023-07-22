import React, { Component } from 'react'
import api from '../../api'
import styled from 'styled-components'
import BoardGameRecord from '../../components/boardgame/Ficha'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

const queryParameters = new URLSearchParams(window.location.search)
const bgId = queryParameters.get("bgId")

class BoardGameDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgame: null,
            isLoading: true
        }
    }

    componentDidMount = async () => {
        await api.getBoardGameDetail(bgId).then(boardgame => {
            this.setState({
                boardgame: boardgame.data
            })
        })
    }

    render() {
        const { boardgame } = this.state;

        if (boardgame != null){
            return (
                <Wrapper>
                    <BoardGameRecord 
                        boardgame={boardgame}/>
                </Wrapper>
            );
        } else {
            return
        }

    }
}

export default BoardGameDetail