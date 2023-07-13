import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

const queryParameters = new URLSearchParams(window.location.search)
const bgId = queryParameters.get("bgId")

class BoardGameDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            boardgame: null
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
            const bgName = Array.isArray(boardgame.name) ? "XXXX" : boardgame.name['#text']
            const bgDescription = boardgame.description[0].text    
            return (
                <Wrapper>
                    <div id={boardgame._id} >
                        <div ><img src={boardgame.image} alt={Array.isArray(boardgame.name) ? "XXXX" : boardgame.name['#text']} /></div>
                        <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
                        <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
                    </div>
                </Wrapper>
            );
        } else {
            return
        }

    }
}

export default BoardGameDetail