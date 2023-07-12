


export default function BoardgameListRow(props) {
    return (
        <div key={props.boardgame._id}>
            <div ><img src={props.boardgame.thumbnail} alt={Array.isArray(props.boardgame.name) ? "XXXX" : props.boardgame.name['#text']} /></div>
            <div dangerouslySetInnerHTML={{ __html: Array.isArray(props.boardgame.name) ? "XXXX" : props.boardgame.name['#text']}} />
            <div dangerouslySetInnerHTML={{ __html: props.boardgame.description[0].text}} />
        </div>
    )
}