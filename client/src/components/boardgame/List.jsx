import BoardgameListRow from './ListRow';
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

export default function BoardgameList(props) {
    return (
        <Wrapper>
            {props.boardgames.map((boardgame, index) => {
                return(
                    <BoardgameListRow
                        boardgame={boardgame}
                        key={boardgame._id}
                    />
                )
            })}
        </Wrapper>
    );
}