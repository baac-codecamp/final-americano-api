const CLT_NEWS = require('../models/news')
const CLT_CUSTOMER = require('../models/customer')
const CLT_REWARD = require('../models/reward')
const moment = require('moment')
const _baseCore = require('../utils/baseCore')

async function getNews(req, res, next) {
  let objResult = {}
  const listNews = await CLT_NEWS.find().sort({ createdAt: -1 })
  objResult.ListNews = listNews

  return _baseCore.resMsg(res, 200, 'S', 'Get News Success!', objResult)
}
async function getNewsById(req, res, next) {
  const { id } = req.params
  let objResult = {}
  const currNews = await CLT_NEWS.findOne({ _id: id })
  if (!currNews) {
    return _baseCore.resMsg(res, 400, 'F', 'Is not found news!')
  }
  objResult.currNews = currNews
  return _baseCore.resMsg(res, 200, 'S', 'Get news by id success!', objResult)
}

async function findSalakByCid(req, res, next) {
  const { cid, bod } = req.body

  //const cid = '1770200005105'
  //const bod = new Date('1991-09-03')

  // cid find to cs
  const currCus = await CLT_CUSTOMER.findOne({ cid: cid })
  if (!currCus) {
    return _baseCore.resMsg(res, 400, 'F', 'Is not cid!', {})
  }

  // check bod
  if (moment(bod).format('L') !== moment(currCus.bod).format('L')) {
    return _baseCore.resMsg(res, 400, 'F', 'Is not match bod!', {})
  }

  // get match reward
  let objResult = {
    _id: currCus._id,
    cid: currCus.cid,
    cif: currCus.cif,
    cusName: currCus.cusName,
    bod: currCus.bod,
    arrReward: [],
  }
  const arrReward = []

  for (const csSlk1 of currCus.cusSalak) {
    // check salakNo match reward
    for (const slk1 of csSlk1.salakNo) {
      const currReward = await CLT_REWARD.find({ rewardNo: { $gte: slk1.start, $lte: slk1.end } })
      for (const rewd1 of currReward) {
        arrReward.push({
          accNo: csSlk1.accNo,
          accName: csSlk1.accName,
          accType: csSlk1.accType,
          salakNoStart: slk1.start,
          salakNoEnd: slk1.end,
          rewardAtDate: rewd1.rewardAtDate,
          rewardAtSeq: rewd1.rewardAtSeq,
          rewardPrice: rewd1.rewardPrice,
          rewardNo: rewd1.rewardNo,
        })
      }
    }
  }
  objResult = { ...objResult, arrReward: arrReward }
  //   console.log(objResult)
  return _baseCore.resMsg(res, 200, 'S', 'Find salak by cid success!', objResult)
}

async function findSalakBySelf(req, res, next) {
  const { rewardAtDate } = req.body
  //const rewardAtDate = '2020-06-16'
  let objResult = {}
  const lsReward = await CLT_REWARD.find({ rewardAtDate: rewardAtDate })

  if (!lsReward) {
    return _baseCore.resMsg(res, 400, 'F', 'Is not rewardDate!', {})
  }

  const rewardSeq1 = lsReward.filter((s) => s.rewardAtSeq === '1')
  const rewardSeq2 = lsReward.filter((s) => s.rewardAtSeq === '2')
  const rewardSeq3 = lsReward.filter((s) => s.rewardAtSeq === '3')
  const rewardSeq4 = lsReward.filter((s) => s.rewardAtSeq === '4')
  const rewardSeq5 = lsReward.filter((s) => s.rewardAtSeq === '5')
  objResult = {
    rewardAtDate: lsReward[0].rewardAtDate,
    seq1: {
      no: rewardSeq1.map((s) => s.rewardNo),
      price: rewardSeq1[0] ? rewardSeq1[0].rewardPrice : 0,
    },
    seq2: {
      no: rewardSeq2.map((s) => s.rewardNo),
      price: rewardSeq2[0] ? rewardSeq2[0].rewardPrice : 0,
    },
    seq3: {
      no: rewardSeq3.map((s) => s.rewardNo),
      price: rewardSeq3[0] ? rewardSeq3[0].rewardPrice : 0,
    },
    seq4: {
      no: rewardSeq4.map((s) => s.rewardNo),
      price: rewardSeq4[0] ? rewardSeq4[0].rewardPrice : 0,
    },
    seq5: {
      no: rewardSeq5.map((s) => s.rewardNo),
      price: rewardSeq5[0] ? rewardSeq5[0].rewardPrice : 0,
    },
  }
  console.log(objResult)
  return _baseCore.resMsg(res, 200, 'S', 'Find salak by self success!', objResult)
}

async function getListRewardAtDate(req, res, next) {
  let objResult = {}
  const currData = await CLT_REWARD.find().distinct('rewardAtDate')

  if (!currData) {
    return _baseCore.resMsg(res, 400, 'F', 'Is not rewardDate!', {})
  }

  objResult.ListRewardAtDate = currData

  return _baseCore.resMsg(res, 200, 'S', 'Get list reardAtDate success!', objResult)
}

module.exports = { getNews, getNewsById, findSalakByCid, findSalakBySelf, getListRewardAtDate }
