const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema(
  {
    cid: { type: String, required: true, trim: true },
    cif: { type: String, required: true, trim: true },
    bod: { type: Date, required: true },
    cusName: { type: String, required: true, trim: true },
    cusSalak: [
      {
        accNo: { type: String },
        accName: { type: String },
        accType: { type: String },
        salakNo: [
          {
            start: { type: String },
            end: { type: String },
          },
        ],
      },
    ],
  },
  {
    toJSON: { virtuals: true },
    collation: 'customer',
    timestamps: true,
  }
)

const user = mongoose.model('customer', customerSchema)
module.exports = user
