function resMsg(res, code, status, msg, data) {
  let currStatus = ''
  switch (status) {
    case 'S':
      currStatus = 'success'
      break
    case 'F':
      currStatus = 'fail'
      break
    case 'E':
      currStatus = 'error'
      break
    default:
      currStatus = status
      break
  }

  res.status(code).json({
    response_status: currStatus,
    response_message: msg,
    response_data: data,
  })
}

module.exports = { resMsg }
