export default function BoardGameListRow(props) {
    //console.log('props.boardgame: ', props.boardgame)

    const bgName = Array.isArray(props.boardgame.name) ? props.boardgame.name[0]['@value'] : props.boardgame.name['@value']
    const bgDescription = props.boardgame.description[0].text

    return (
        <div id={props.boardgame._id} >
            <div ><img src={props.boardgame.thumbnail} alt={bgName}/></div>
            <div dangerouslySetInnerHTML={{ __html: '<b>' + bgName + '</b>'}} />
            <div dangerouslySetInnerHTML={{ __html: bgDescription}} />
        </div>
    )
}