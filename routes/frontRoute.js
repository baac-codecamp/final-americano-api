const router = require('express').Router()
const FRONT_BL = require('../controllers/frontController')

router.get('/test', (req, res, next) => {
  res.send('Path Front OK')
})

router.get('/getNews', FRONT_BL.getNews)
router.get('/getNewsById/:id', FRONT_BL.getNewsById)
router.get('/getListRewardAtDate', FRONT_BL.getListRewardAtDate)
router.post('/findSalakByCid', FRONT_BL.findSalakByCid)
router.post('/findSalakBySelf', FRONT_BL.findSalakBySelf)

module.exports = router
