const router = require('express').Router()
const CLT_USER = require('../models/user')
const SYSTEM_BL = require('../controllers/systemController')
const auth = require('../middleware/authenHandler')

router.get('/test', auth.isLoggedIn, (req, res, next) => {
  res.send('Path Admin OK')
})

router.post('/signup', SYSTEM_BL.signup)
router.post('/login', SYSTEM_BL.login)

module.exports = router
