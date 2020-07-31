const router = require('express').Router()
const FRONT_BL = require('../controllers/frontController')

router.get('/test', (req, res, next) => {
  console.log('OK')
  res.send('Path Front OK')
})

router.get('/getNews', FRONT_BL.getNews)

module.exports = router
