const Match = require('../models/match-model');

getMatchById =  async (req, res) => {
    console.log('req.params.bgId: ', req.params.matchId);
    try{
        var data = await Match.findById(req.params.matchId)
        console.log('Data: ', data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

getMatchs =  async (req, res) => {
    console.log('req.query: ', req.query)
    try{
        var query = Match.find();
        query.limit(100);
        query.then(await function (data) {
            res.json(data)
        });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

saveMatch =  async (req, res) => {
    const data = new Match({
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
    saveMatch,
    getMatchs,
    getMatchById
}