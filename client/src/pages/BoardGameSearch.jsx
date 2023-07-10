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
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllBoardGame().then(boardgames => {
            this.setState({
                boardgames: boardgames.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { boardgames, isLoading } = this.state
        console.log('TCL: BoardGameList -> render -> boardgames', boardgames)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Rating',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Time',
                accessor: 'time',
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
        ]

        let showTable = true
        if (!boardgames.length) {
            showTable = false
        }

        return (
            <Wrapper>

            </Wrapper>
        )
    }
}

export default BoardGameList