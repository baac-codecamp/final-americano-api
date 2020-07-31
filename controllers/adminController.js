const XLSX = require('xlsx')
const CLT_CUSTOMER = require('../models/customer')
const path = require('path')
const _baseCore = require('../utils/baseCore')

async function insertDataCustomer() {
  console.log('Hi InsertDataCustomer')
  const pathData = path.join(__dirname, '../data/cs.xlsx')
  const wb = XLSX.readFile(pathData)
  const wsData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])

  // {
  //   Seq: 97,
  //   CID: '1103702879126',
  //   CIFNo: '30461376',
  //   CIFName: 'กตัญชลี สัญญากิจ',
  //   AccNo: '400031282890',
  //   AccName: 'นางสาว กตัญชลี สัญญากิจ   ',
  //   Branch: 'สาขานางเลิ้ง',
  //   SalakStart: '80033117',
  //   SalakEnd: '80033136'
  // }
  //console.log(wsData)
  let i = 0
  wsData.map(async (itemWs1) => {
    let currCus = await CLT_CUSTOMER.findOne({ cid: itemWs1.CID })
    if (i === 0) {
      console.log('--------------------------')

      console.log(itemWs1)
      console.log(currCus)
      console.log('--------------------------')
    }
    i++
    if (currCus) {
      // update customer
      console.log('UPDATE')
      let aa = []

      currCus.cusSalak.map((itemCusSalak1) => {
        // isFoundAcc
        if (itemWs1.AccNo === itemCusSalak1.accNo) {
          // isSalak Start-End
          let isSameSalakNo = itemCusSalak1.salakNo.find(
            (itemSalakNo1) => itemSalakNo1.start === itemWs1.SalakStart && itemSalakNo1.end === itemWs1.SalakEnd
          )
          if (!isSameSalakNo) {
          }
        }
      })
    } else {
      // add new customer
      console.log('ADD')
      let objCus1 = new CLT_CUSTOMER()

      objCus1.cid = itemWs1.CID
      objCus1.cif = itemWs1.CIFNo
      objCus1.bod = new Date()
      objCus1.cusName = itemWs1.CIFName
      objCus1.cusSalak = [
        {
          accNo: itemWs1.AccNo,
          accName: itemWs1.AccName.trim(),
          salakNo: [
            {
              start: itemWs1.SalakStart,
              end: itemWs1.SalakEnd,
            },
          ],
        },
      ]
      objCus1.save()
      // console.log(objCus1)
    }
  })
}
const CLT_News = require('../models/news')
async function addNews(req, res, next) {
  const {title,imgUrl,desc} = req.body
  let objNews = new CLT_News()
  objNews.title = title
  objNews.imgUrl = imgUrl
  objNews.desc = desc
  objNews.save()
  _baseCore.resMsg(res, 200, 'S', 'Add News Success', {})
}
async function getNews(req,res,next){
  let listNews = await CLT_News.find().sort({createdAt:-1})
  console.log(listNews)
  _baseCore.resMsg(res, 200, 'S', 'Get News Success', listNews)
}

module.exports = { insertDataCustomer, addNews,getNews}
