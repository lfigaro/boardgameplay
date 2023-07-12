import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    `

const queryParameters = new URLSearchParams(window.location.search)
const searchTerm = queryParameters.get("searchTerm")

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
        await api.getBoardGameSearch(searchTerm).then(boardgames => {
            this.setState({
                boardgames: boardgames.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { boardgames } = this.state
        console.log('TCL: BoardGameSearch -> render -> boardgames', boardgames)

        return (
            <Wrapper>
              {boardgames.map((boardgame, index) => {
                return (
                    <div key={boardgame._id}>
                        <div ><img src={boardgame.thumbnail} alt={Array.isArray(boardgame.name) ? "XXXX" : boardgame.name['#text']} /></div>
                        <div dangerouslySetInnerHTML={{ __html: Array.isArray(boardgame.name) ? "XXXX" : boardgame.name['#text']}} />
                        <div dangerouslySetInnerHTML={{ __html: boardgame.description[0].text}} />
                    </div>
                );
              })}
            </Wrapper>
        )
    }
}

export default BoardGameSearch