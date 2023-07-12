import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import BoardgameListRow from '../components/boardgame/ListRow'


const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
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
                    return(
                        <BoardgameListRow
                            boardgame={boardgame}
                            key={boardgame._id}
                        />
                    )
                })}
            </Wrapper>
        );
    }
}

export default BoardGameList