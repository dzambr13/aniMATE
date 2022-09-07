const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Account = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, requried: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Account', Account)
