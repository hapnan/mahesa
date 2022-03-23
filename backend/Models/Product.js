const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Product = new Schema({
  product: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  Stock: {
    type: Number,
    required: true
  },
  User: {
    type: String,
    required: true
  },
  CreatedAt:{
      type: Date,
      required: true
  },
  UpdatedAt:{
    type: Date,
    required: true
  }
}, {
    collection: 'Product'
  })
module.exports = mongoose.model('Product', Product)