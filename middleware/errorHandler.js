// const _baseCore = require('../utils/baseCore')

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  //_baseCore.resMsg(res, statusCode, 'fail', err.message, err)
}

const notFoundHandler = (req, res, next) => {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
}

module.exports = { errorHandler, notFoundHandler }
