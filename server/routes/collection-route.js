const express = require('express')
const CollectionCtrl = require('../controllers/collection-ctrl')
const router = express.Router()


// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', (req, res) => {
  res.send('Collections home page')
})

// retorna produto
router.get('/list', CollectionCtrl.getCollections)
router.get('/search', CollectionCtrl.getCollections)
router.get('/:collectionId', CollectionCtrl.getCollections)

module.exports = router