export default function BoardgameListRow(props) {
    //console.log('props.boardgame: ', props.boardgame)

    const bgName = Array.isArray(props.boardgame.name) ? props.boardgame.name[0]['#text'] : props.boardgame.name['#text']
    const bgDescription = props.boardgame.description[0].text

    return (
        <div id={props.boardgame._id} >
            <div ><img src={props.boardgame.thumbnail} alt={bgName} /></div>
            <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
            <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
        </div>
    )
}