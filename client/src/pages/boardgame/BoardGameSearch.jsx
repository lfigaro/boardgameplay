import React, { Component } from 'react'
import api from '../../api'
import BoardgameList from '../../components/boardgame/List'

const queryParameters = new URLSearchParams(window.location.search)
const searchTerm = queryParameters.get("searchTerm")

class BoardGameSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgames: []
        }
    }

    componentDidMount = async () => {
        await api.getBoardGameSearch(searchTerm).then(boardgames => {
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

export default BoardGameSearch