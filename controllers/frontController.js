const CLT_NEWS = require('../models/news')

async function getNews(req, res, next) {
  let listNews = await CLT_NEWS.find().sort({ createdAt: -1 })
  _baseCore.resMsg(res, 200, 'S', 'Get News Success!', listNews)
}
async function getNewsById(req, res, next) {
  // let listNews = await CLT_NEWS.find().sort({ createdAt: -1 })
  // _baseCore.resMsg(res, 200, 'S', 'Get News Success!', listNews)
}

module.exports = { getNews }
