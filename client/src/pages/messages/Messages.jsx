import React, { Component } from 'react'
import api from '../../api'
import styled from 'styled-components'
import withRouter from '../../components/util/withRouter'

const Container = styled.div.attrs({
    className: 'container',
})``

const Reply = styled.textarea.attrs({
})`
width: 600px
`

class Messages extends Component {
    constructor(props) {
        super(props)
        let chatId = this.props.params.chatId
        this.state = {
            chat: { 
                _id: chatId,
                messages: [] 
            }
        }
    }

    componentDidMount = async () => {
        const { chat } = this.state;
        await api.getMessages({ chatId: chat._id }).then(chat => {
            console.log(chat.data)
            this.setState({
                chat: chat.data
            })
        })
    }

    render() {
        const { chat } = this.state;

        const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                const text = e.target[0].value
                const loggedInUser = localStorage.getItem("user");
                const foundUser = JSON.parse(loggedInUser);

                const reply = {
                    chatId: chat._id,
                    user: foundUser._id,
                    text: text
                }
                await api.sendMessage(reply)
                    .then(userRes => {
                        window.location.href = "/messages/" + chat._id
                    });
            } catch (err) {
                this.setState({
                    chat: null,
                    err: err
                })
            }
        };

        return (
            <Container>
                {chat.messages.map((message, index) => {
                    console.log(message)
                    return (
                        <div id={message._id} >
                            <div dangerouslySetInnerHTML={{ __html: '<b>' + message.author.name + '</b>' }} />
                            <div dangerouslySetInnerHTML={{ __html: message.text }} />
                            <div dangerouslySetInnerHTML={{ __html: '<i>' + message.date + '</i>' }} />
                            <hr/>
                        </div>
                    )
                })}

                <form action='/messages/{chat._id}' method="get" onSubmit={handleSubmit}>
                    <Reply id='reply' name='reply' />
                    <button type="submit">Enviar</button>
                </form>
            </Container>
        );
    }
}

export default withRouter(Messages)