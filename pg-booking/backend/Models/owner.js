const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OwnerSchema = new Schema({
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  pass: {
    type: String
  }
}, {
    collection: 'owners'
  })

module.exports = mongoose.model('Owner', OwnerSchema)