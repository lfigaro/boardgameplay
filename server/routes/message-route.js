const express = require('express')
const MessageCtrl = require('../controllers/message-ctrl')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('User home page')
})

// retorna produto
router.post('/send/', MessageCtrl.sendMessage)
router.get('/get/', MessageCtrl.getMessages)

module.exports = router