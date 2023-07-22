import React, { Component } from 'react'
import api from '../../api'
import MessageList from '../../components/messages/List'

class MessagesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            messages: []
        }
    }

    componentDidMount = async () => {
        const loggedInUser = localStorage.getItem("user");
        const user = JSON.parse(loggedInUser)

        await api.getMessages({user: user._id}).then(messages => {
            console.log(messages.data)
            this.setState({
                messages: messages.data
            })
            
        })
    }

    render() {
        const { messages } = this.state;
        return (
            <MessageList 
                messages={messages}/>
        );
    }
}

export default MessagesList