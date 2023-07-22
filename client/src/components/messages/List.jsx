
import styled from 'styled-components'
import _ from 'lodash';

const Container = styled.div.attrs({
    className: 'container',
})``

const loggedInUser = JSON.parse(localStorage.getItem("user"));

export default function MessageList(props) {
    return (
        <Container>
            {props.messages.map((chat, index) => {
                var linkBg = '/messages/' + chat._id;
                return(
                    <a href={linkBg}
                        className="nav-link"
                        key={chat._id}>
                            { _.isEqual(chat.users[0], loggedInUser) ? chat.users[1].name : chat.users[0].name }
                        <hr />
                    </a>
                )
            })}
        </Container>
    );
}