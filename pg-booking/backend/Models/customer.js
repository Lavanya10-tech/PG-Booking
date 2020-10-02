const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CustomerSchema = new Schema({
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
    collection: 'customers'
  })

module.exports = mongoose.model('Cust', CustomerSchema)