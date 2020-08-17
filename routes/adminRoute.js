const router = require('express').Router()
const SYSTEM_BL = require('../controllers/systemController')
const ADMIN_BL = require('../controllers/adminController')
const auth = require('../middleware/authenHandler')

router.get('/test', (req, res, next) => {
  res.send('Path Admin OK')
})

router.get('/mockbaac', async (req, res, next) => {
  console.log('Start MockData...')
  await ADMIN_BL.insertDataCustomer_Mock()
  await ADMIN_BL.insertDataReward_Mock()
  await ADMIN_BL.addNews_Mock()

  await SYSTEM_BL.signup_Mock()
  console.log('MockData Success!')

  res.status(200).send('MockData Success!')
})

router.post('/signup', SYSTEM_BL.signup)
router.post('/login', SYSTEM_BL.login)

// by pass testing
router.post('/addNews', ADMIN_BL.addNews)
router.post('/insertDataCustomer', ADMIN_BL.insertDataCustomer)
router.post('/insertDataReward', ADMIN_BL.insertDataReward)

// using auth
router.post('/auth/addNews', auth.isLoggedIn, ADMIN_BL.addNews)
router.post('/auth/insertDataCustomer', auth.isLoggedIn, ADMIN_BL.insertDataCustomer)
router.post('/auth/insertDataReward', auth.isLoggedIn, ADMIN_BL.insertDataReward)

module.exports = router
