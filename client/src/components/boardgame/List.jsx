import BoardgameListRow from './ListRow';
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroll-component';

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

export default function BoardGameList(props) {



    //console.log('props.boardgames: ', props.boardgames)
    return (
        <Wrapper>
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
        </Wrapper>
    );
}