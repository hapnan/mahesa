let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Users Model
let Users = require('../models/Users');
// CREATE Student
router.route('/create-users').post((req, res, next) => {
  Users.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});
// READ Students
router.route('/').get((req, res) => {
  Users.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Single Student
router.route('/edit-users/:id').get((req, res) => {
  Users.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Student
router.route('/update-users/:id').put((req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Users updated successfully !')
    }
  })
})
// Delete Student
router.route('/delete-users/:id').delete((req, res, next) => {
  Users.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = router;