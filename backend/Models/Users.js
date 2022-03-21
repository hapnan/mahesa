const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Users = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
    collection: 'Users'
  })
module.exports = mongoose.model('Users', Users)