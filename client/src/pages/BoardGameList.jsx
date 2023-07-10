import React, { Component } from 'react'
import ReactTable from "react-table-6";
import api from '../api'

import styled from 'styled-components'

import "react-table-6/react-table.css" 

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
        const { boardgames, isLoading } = this.state
        console.log('TCL: BoardGameList -> render -> boardgames', boardgames)

        return (
            <div>
              {boardgames.map((boardgame, index) => {
                return (
                    <div key={boardgame._id}>
                        <div ><img src={boardgame.thumbnail} /></div>
                        <div dangerouslySetInnerHTML={{ __html: Array.isArray(boardgame.name) ? "XXXX" : boardgame.name['#text']}} />
                        <div dangerouslySetInnerHTML={{ __html: boardgame.description[0].text}} />
                    </div>
                );
              })}
            </div>
        );
    }
}

export default BoardGameList