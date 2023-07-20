import styled from 'styled-components'

const Container = styled.div.attrs({
    className: 'container',
})``


export default function BoardGameRecord(props) {
    const bgName = Array.isArray(props.boardgame.name) ? props.boardgame.name[0]['@value'] : props.boardgame.name['@value']
    const bgDescription = props.boardgame.description[0].text

    return (
        <Container id={props.boardgame._id} >
            <div ><img src={props.boardgame.image} alt={bgName} width="450" /></div>
            <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
            <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
        </Container>
    );
}