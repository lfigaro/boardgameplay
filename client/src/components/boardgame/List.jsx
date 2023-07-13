import { useLocation, Link } from "react-router-dom";
import BoardgameListRow from './ListRow';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

export default function BoardgameList(props) {
    return (
        <Wrapper>
            {props.boardgames.map((boardgame, index) => {
                const linkBg = '/boardgame?bgId=' + boardgame._id;
                return(
                    <Link to={linkBg}
                        className="nav-link"
                        key={boardgame._id}>

                        <BoardgameListRow
                            boardgame={boardgame}
                            key={boardgame._id}
                        />

                    </Link>
                )
            })}
        </Wrapper>
    );
}