const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema(
  {
    rewardAtSeq: { type: String, required: true, trim: true },
    rewardNo: { type: String, required: true, trim: true },
    rewardType: { type: String, required: true, trim: true },
    rewardAtDate: { type: Date, required: true },
  },
  {
    toJSON: { virtuals: true },
    collation: 'reward',
    timestamps: true,
  }
)

const reward = mongoose.model('reward', rewardSchema)
module.exports = reward
