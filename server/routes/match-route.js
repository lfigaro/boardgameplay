const express = require('express')
const MatchCtrl = require('../controllers/match-ctrl')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Matchs home page')
})

// retorna produto
router.get('/list', MatchCtrl.getMatchs)
router.get('/search', MatchCtrl.getMatchs)
router.get('/:matchId', MatchCtrl.getMatchs)

module.exports = router