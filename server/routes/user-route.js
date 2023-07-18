const express = require('express')
const UserCtrl = require('../controllers/user-ctrl')
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
router.post('/save/', UserCtrl.saveUser)
router.post('/check/', UserCtrl.checkUser)

module.exports = router