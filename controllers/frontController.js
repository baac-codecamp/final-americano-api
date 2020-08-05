const CLT_NEWS = require('../models/news')
const CLT_CUSTOMER = require('../models/customer')
const CLT_REWARD = require('../models/reward')

async function getNews(req, res, next) {
  let listNews = await CLT_NEWS.find().sort({ createdAt: -1 })
  _baseCore.resMsg(res, 200, 'S', 'Get News Success!', listNews)
}
async function getNewsById(req, res, next) {
  // let listNews = await CLT_NEWS.find().sort({ createdAt: -1 })
  // _baseCore.resMsg(res, 200, 'S', 'Get News Success!', listNews)
}

// find CID
// cid , bod    2020-08-01

async function findSalakByCID(req, res, next) {
  // const { cid, bod } = req.body

  const cid = '1770200005105'
  const bod = new Date('2020-07-31')

  // cid find to cs
  const currCus = await CLT_CUSTOMER.findOne({ cid: cid })

  console.log(currCus)
}
module.exports = { getNews, findSalakByCID }
