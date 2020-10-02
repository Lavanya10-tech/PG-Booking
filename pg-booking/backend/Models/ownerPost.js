const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let OwnerPostSchema = new Schema({
  id:{
    type: String
  },
  hname: {
    type: String
  },
  minDays: {
    type: Number
  },
  maxDays: {
    type: Number
  },
  rent: {
    type: Number
  },
  img: {
    data: Buffer,
    contentType: String
  }
}, {
    collection: 'ownerPosts'
  })

module.exports = mongoose.model('OwnerPost', OwnerPostSchema)