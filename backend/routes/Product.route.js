let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
const { data } = require('autoprefixer');
  const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
let Product = require('../models/Product');
const { route } = require('./Users.route');

// Product Model

router.post('/addproduct', (req, res, next) => {
    Product.create(req.body, (error, data) => {   
        console.log(req.body);
        if(error){
            return next(error);
        }else{
            console.log(data);
            res.json(data);
        }
    })
})

router.get('/getall', (req, res) => {
  Product.find((error, data) => {
    console.log(data);
    if (error) {
      return error;
    } else {
      res.json(data)
    }
  })
})

module.exports = router;