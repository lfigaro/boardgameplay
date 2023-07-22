const Message = require('../models/message-model');
const { getUserById } = require('./user-ctrl');

getMessages = async (req, res) => {
    try {
        var data;
        if (req.query.chatId) {
            var data = await Message
                .findById({ _id: req.query.chatId })
                .populate('users')
                .populate('messages.author')
            console.log(data)
            res.json(data)

        } else if (req.query.user) {
            var data = await Message
                .find({ users: req.query.user })
                .populate('users')
                .populate('messages.author')
            console.log(data)
            res.json(data)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

sendMessage = async (req, res) => {
    const msg = {
        author: req.body.params.user,
        text: req.body.params.text
    }

    if (req.body.params.chatId) {
        try {
            chat = await Message.findById(req.body.params.chatId)
            chat.messages.push(msg);
            const dataToSave = await chat.save();
            res.status(200).json(dataToSave);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

    } else if (req.body.params.user && req.body.params.user2) {
        const user1 = req.body.params.user
        const user2 = req.body.params.user2

        const users = [
            user1,
            user2
        ];
        chat = new Message({
            users: users,
            messages: [msg]
        });
        try {
            const dataToSave = await chat.save();
            res.status(200).json(dataToSave);
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = {
    getMessages,
    sendMessage
}