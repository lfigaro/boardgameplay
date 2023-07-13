import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'

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
            console.log('bgId: ', bgId)
            this.setState({
                boardgame: boardgame.data
            })
            //console.log('boardgame: ', boardgame)
        })
    }

    render() {
        const { boardgame } = this.state;
        //console.log('boardgame: ', boardgame)
        if (boardgame != null){
            const bgName = Array.isArray(boardgame.name) ? boardgame.name[0]['#text'] : boardgame.name['#text']
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