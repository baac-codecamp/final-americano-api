const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    imgUrl: { type: String, required: true, trim: true },
    desc: { type: String, required: true }  
  },
  {
    toJSON: { virtuals: true },
    collation: 'news',
    timestamps: true,
  }
)

const news = mongoose.model('news', newsSchema)
module.exports = news
