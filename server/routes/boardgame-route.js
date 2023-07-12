const express = require('express')
const BoardGameCtrl = require('../controllers/boardgame-ctrl')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('BoardGame home page')
})

// retorna produto
router.get('/list', BoardGameCtrl.getBoardGames)
router.get('/search', BoardGameCtrl.getBoardGames)
router.post('/save/:name', BoardGameCtrl.updateBoardGame)
router.get('/:bgId', BoardGameCtrl.getBoardGameById)

module.exports = router