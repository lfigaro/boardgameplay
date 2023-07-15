const User = require('../models/user-model');
const escapeStringRegexp = require('escape-string-regexp');

getUserById =  async (req, res) => {
    console.log('req.params.bgId: ', req.params.bgId);
    try{
        var data = await User.findById(req.params.bgId)
        console.log('Data: ', data)
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

getUsers =  async (req, res) => {
    console.log('req.query: ', req.query)
    try{
        var data;
        if(typeof req.query.bgId != 'undefined'){
            //var data = await User.findById(''+ req.query.bgId)
            var data = await User.findById({ _id: req.query.bgId })
            //console.log('Data: ', data)
            res.json(data)

        }else if (typeof req.query.searchTerm != 'undefined'){
            const $regex = escapeStringRegexp('+' + req.query.searchTerm + '/i');
            var query = User.find({ 'name.@value': { $regex: req.query.searchTerm } });
            query.limit(100);
            query.then(await function (data) {
                res.json(data)
            });

        }else{
            var query = User.find();
            query.limit(100);
            query.then(await function (data) {
                res.json(data)
            });

        }
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}

updateUser =  async (req, res) => {
    const data = new User({
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

saveUser =  async (req, res) => {
    const data = new User({
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
    saveUser,
    updateUser,
    getUsers,
    getUserById
}