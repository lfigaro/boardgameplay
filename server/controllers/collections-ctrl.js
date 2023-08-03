const Collection = require('../models/collection-model');

getCollectionById =  async (req, res) => {
    console.log('req.params.bgId: ', req.params.CollectionId);
    try{
        var data = await Collection.findById(req.params.CollectionId)
        console.log('Data: ', data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

getCollections =  async (req, res) => {
    console.log('req.query: ', req.query)
    try{
        var query = Collection.find();
        query.limit(100);
        query.then(await function (data) {
            res.json(data)
        });
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

saveCollection =  async (req, res) => {
    const data = new Collection({
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
    saveCollection,
    getCollections,
    getCollectionById
}