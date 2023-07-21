import BoardgameListRow from './ListRow';
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component';

const Container = styled.div.attrs({
    className: 'container',
})``

export default function BoardGameList(props) {
    return (
        <Container>
            {props.boardgames.map((boardgame, index) => {
                var linkBg = '/boardgame?bgId=' + boardgame._id;
                return(
                    <a href={linkBg}
                        className="nav-link"
                        key={boardgame._id}>

                        <BoardgameListRow
                            boardgame={boardgame}
                            key={boardgame._id}
                        />
                        <hr />
                    </a>
                )
            })}
        </Container>
    );
}