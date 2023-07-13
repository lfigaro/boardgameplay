function getBoardGame(e) {
    e.preventDefault();
    console.log('You clicked submit.');
}

export default function BoardgameListRow(props) {
    const bgName = Array.isArray(props.boardgame.name) ? "XXXX" : props.boardgame.name['#text']
    const bgDescription = props.boardgame.description[0].text

    return (
        <div id={props.boardgame._id} >
            <div ><img src={props.boardgame.thumbnail} alt={Array.isArray(props.boardgame.name) ? "XXXX" : props.boardgame.name['#text']} /></div>
            <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
            <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
        </div>
    )
}