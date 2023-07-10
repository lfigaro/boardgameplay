const BoardGame = require('../models/boardgame-model');

getBoardGameById =  async (req, res) => {
    console.log('getBoardGameById: ')
    try{
        var data = await BoardGame.findById(req.params.bgId)
        console.log('Data: ', data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

getBoardGames =  async (req, res) => {
    console.log('getBoardGames: ')
    try{
        var data;

        if(typeof req.params.bgId != 'undefined'){
            var data =  BoardGame.find(req.params.bgId);
        }else{
            var query = BoardGame.find();
            query.limit(10);
            query.then(await function (data) {
                res.json(data)
            });
        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

updateBoardGame =  async (req, res) => {
    console.log('updateBoardGame: ')
    const data = new BoardGame({
        _id: 12345,
        name: req.params.name
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

module.exports = {
    updateBoardGame,
    getBoardGames,
    getBoardGameById
}