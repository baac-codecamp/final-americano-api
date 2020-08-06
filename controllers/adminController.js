const XLSX = require('xlsx')
const CLT_CUSTOMER = require('../models/customer')
const CLT_REWARD = require('../models/reward')
const CLT_News = require('../models/news')
const path = require('path')
const _baseCore = require('../utils/baseCore')

async function insertDataCustomer() {
  const pathData = path.join(__dirname, '../data/customer.xlsx')
  const wb = XLSX.readFile(pathData)
  const wsData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  for (const itemWs1 of wsData) {
    let currCus = await CLT_CUSTOMER.findOne({ cid: itemWs1.CID })

    if (currCus) {
      // Update Customer

      let isFoundAccNo = await currCus.cusSalak.find((itemCSLK1) => itemCSLK1.accNo === itemWs1.AccNo)

      if (isFoundAccNo) {
        // console.log('isFoundAccNo')

        let isFoundSalakNo = await isFoundAccNo.salakNo.find((itemSLK1) => itemSLK1.start === itemWs1.SalakStart && itemSLK1.end === itemWs1.SalakEnd)

        if (!isFoundSalakNo) {
          // console.log('!isFoundSalakNo')

          // Add SalakNo
          isFoundAccNo.salakNo.push({ start: itemWs1.SalakStart, end: itemWs1.SalakEnd })
          await currCus.save()
          console.log('Add New SalakNo')
          console.log('UPDATE: ' + itemWs1.CID)
          console.log('SAVE!')
        }
      } else {
        // Add New Account
        // console.log('Add New Account')

        currCus.cusSalak.push({
          accNo: itemWs1.AccNo,
          accName: itemWs1.AccName.trim(),
          accType: itemWs1.AccType,
          salakNo: [
            {
              start: itemWs1.SalakStart,
              end: itemWs1.SalakEnd,
            },
          ],
        })

        await currCus.save()
        console.log('Add New Account')
        console.log('UPDATE: ' + itemWs1.CID)
        console.log('SAVE!')
      }
    } else {
      // Add New Customer
      let objCus1 = new CLT_CUSTOMER()
      objCus1.cid = itemWs1.CID
      objCus1.cif = itemWs1.CIFNo
      objCus1.bod = itemWs1.BOD
      objCus1.cusName = itemWs1.CIFName
      objCus1.cusSalak = [
        {
          accNo: itemWs1.AccNo,
          accName: itemWs1.AccName.trim(),
          accType: itemWs1.AccType,
          salakNo: [
            {
              start: itemWs1.SalakStart,
              end: itemWs1.SalakEnd,
            },
          ],
        },
      ]
      await objCus1.save()
      console.log('Add New Customer')
      console.log('ADD: ' + itemWs1.CID)
      console.log('SAVE!')
    }
  }
}

async function insertDataReward() {
  const pathData = path.join(__dirname, '../data/reward.xlsx')
  const wb = XLSX.readFile(pathData)
  const wsData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  let currData = await CLT_REWARD.find()
  for (const item1 of currData) {
    await CLT_REWARD.findByIdAndDelete({ _id: item1._id })
  }
  console.log('Delete Data Reward Success!')

  for (const itemWs1 of wsData) {
    let objRew1 = new CLT_REWARD()
    const { RewardAtDate, RewardAtSeq, RewardPrice, RewardNo } = itemWs1
    objRew1.rewardAtDate = new Date(RewardAtDate)
    objRew1.rewardAtSeq = RewardAtSeq
    objRew1.rewardPrice = RewardPrice
    objRew1.rewardNo = RewardNo
    objRew1.save()
    // console.log('Add New Data Reward')
    // console.log('SAVE!')
  }

  console.log('Add New Reward Success!')
}

async function addNews(req, res, next) {
  const { title, imgUrl, desc } = req.body

  let objNews = new CLT_News()
  objNews.title = title
  objNews.imgUrl = imgUrl
  objNews.desc = desc
  objNews.save()

  return _baseCore.resMsg(res, 200, 'S', 'Add News Success', {})
}

module.exports = { insertDataCustomer, insertDataReward, addNews }
