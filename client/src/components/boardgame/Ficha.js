import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 40px 200px 200px 200px;
`

export default function BoardGameRecord(props) {
    const bgName = Array.isArray(props.boardgame.name) ? props.boardgame.name[0]['@value'] : props.boardgame.name['@value']
    const bgDescription = props.boardgame.description[0].text

    return (
        <div id={props.boardgame._id} >
            <div ><img src={props.boardgame.image} alt={bgName} width="450" /></div>
            <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
            <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
        </div>
    );
}