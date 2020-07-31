const CLT_USER = require('../models/user')
const _baseCore = require('../utils/baseCore')

async function signup(req, res, next) {
  // get req data
  const { username, password, fullname } = req.body

  // check isFound username
  const currUser = await CLT_USER.findOne({ username: username })
  if (currUser) {
    _baseCore.resMsg(res, 400, 'F', 'Username already exits', {})
    return
  }

  // add obj user
  let objUser = new CLT_USER()
  objUser.username = username
  objUser.password = await objUser.encryptPassword(password)
  objUser.fullname = fullname

  await objUser.save()

  _baseCore.resMsg(res, 201, 'S', 'signup success!', { username: username })
}

async function login(req, res, next) {
  // get req data
  const { username, password } = req.body
  // check username & password
  const currUser = await CLT_USER.findOne({ username: username })
  if (!currUser) {
    _baseCore.resMsg(res, 400, 'F', 'Username or password is wrong!', {})
    return
  }

  // get authen
  const objAuth = await currUser.toAuthen()

  _baseCore.resMsg(res, 200, 'S', 'Login is success!', objAuth)
}

module.exports = { signup, login }
