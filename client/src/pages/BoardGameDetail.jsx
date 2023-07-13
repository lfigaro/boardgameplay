import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import BoardGameRecord from '../components/boardgame/Ficha'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

const queryParameters = new URLSearchParams(window.location.search)
const bgId = queryParameters.get("bgId")
console.log('window.location.search: ', window.location.search)

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
            //console.log('bgId: ', bgId)
            this.setState({
                boardgame: boardgame.data
            })
            //console.log('boardgame: ', boardgame)
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