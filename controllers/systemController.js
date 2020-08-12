const CLT_USER = require('../models/user')
const _baseCore = require('../utils/baseCore')

async function signup(req, res, next) {
  // get req data
  const { username, password, fullname } = req.body

  // check isFound username
  const currUser = await CLT_USER.findOne({ username: username })
  if (currUser) {
    return _baseCore.resMsg(res, 400, 'F', 'Username already exits', {})
  }

  // add obj user
  let objUser = new CLT_USER()
  objUser.username = username
  objUser.password = await objUser.encryptPassword(password)
  objUser.fullname = fullname

  await objUser.save()

  return _baseCore.resMsg(res, 201, 'S', 'signup success!', { username: username })
}

async function signup_Mock() {
  // get req data
  const username = 'admin'
  const password = 'admin'
  const fullname = 'Administrator'

  // check isFound username
  const currUser = await CLT_USER.findOne({ username: username })
  if (currUser) {
    console.log(`User ${username} created!`)
    return
  }

  // add obj user
  let objUser = new CLT_USER()
  objUser.username = username
  objUser.password = await objUser.encryptPassword(password)
  objUser.fullname = fullname

  await objUser.save()
  console.log(`Create user admin success!`)
}

async function login(req, res, next) {
  // get req data
  const { username, password } = req.body
  // check username & password
  const currUser = await CLT_USER.findOne({ username: username })
  if (!currUser || !(await currUser.comparePassword(password))) {
    return _baseCore.resMsg(res, 400, 'F', 'Username or password is wrong!', {})
  }

  // get authen
  const objAuth = await currUser.toAuthen()

  return _baseCore.resMsg(res, 200, 'S', 'Login is success!', objAuth)
}

module.exports = { signup, signup_Mock, login }
