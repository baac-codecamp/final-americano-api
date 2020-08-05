const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema(
  {
    rewardAtDate: { type: Date, required: true },
    rewardAtSeq: { type: String, required: true, trim: true },
    rewardPrice: { type: Number, required: true },
    rewardNo: { type: String, required: true, trim: true },
  },
  {
    toJSON: { virtuals: true },
    collation: 'reward',
    timestamps: true,
  }
)

const reward = mongoose.model('reward', rewardSchema)
module.exports = reward
