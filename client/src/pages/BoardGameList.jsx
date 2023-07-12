import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

class BoardGameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgames: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.getBoardGameList().then(boardgames => {
            this.setState({
                boardgames: boardgames.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { boardgames } = this.state
        console.log('TCL: BoardGameList -> render -> boardgames', boardgames)

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
        );
    }
}

export default BoardGameList