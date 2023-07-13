import React, { Component } from 'react'
import api from '../api'
import BoardgameList from '../components/boardgame/List'

class BoardGameList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgames: []
        }
    }

    componentDidMount = async () => {
        await api.getBoardGameList().then(boardgames => {
            this.setState({
                boardgames: boardgames.data
            })
        })
    }

    render() {
        const { boardgames } = this.state;
        return (
            <BoardgameList
                boardgames={boardgames} />
        );
    }
}

export default BoardGameList