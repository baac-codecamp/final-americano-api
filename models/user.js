const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/index')

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    password: { type: String, required: true, trim: true },
    fullname: { type: String, required: true, trim: true },
  },
  {
    toJSON: { virtuals: true },
    collation: 'user',
    timestamps: true,
  }
)

userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)
  return hashPassword
}

userSchema.methods.comparePassword = async function (password) {
  const isValid = await bcrypt.compare(password, this.password)
  return isValid
}

userSchema.methods.generateJWT = async function () {
  const token = await jwt.sign(
    {
      id: this._id,
      fullname: this.fullname,
    },
    JWT_SECRET,
    { expiresIn: '1 days' }
  )

  return token
}

userSchema.methods.toAuthen = async function () {
  const currToken = await this.generateJWT()
  const decodeToken = jwt.decode(currToken)
  const objUser = {
    username: this.username,
    fullname: this.fullname,
    token: currToken,
    expires_in: decodeToken.exp,
  }
  return objUser
}

const user = mongoose.model('user', userSchema)
module.exports = user
