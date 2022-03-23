let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
// Users Model
let Users = require('../models/Users');
let bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
// CREATE Student
router.route('/create-users').post((req, res, next) => {
    Users.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        Users.create(req.body, (error, data) => {
          if (error) {
            return next(error)
          } else {
            console.log(data)
            res.json(data)
          }
        })
      }
    })
  });
// READ Students
router.get('/auth', async (req, res) => {
  const token = req.header['x-access=token']
  try {
    const decode = jwt.verify(token, keys.secretOrKey)
    return res.status(200).json({token : "token valid"})
  } catch (error) {
    console.log(error)
    res.json(error)
  }
})
// Get Single Student
router.route('/get-users/').post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const nama = req.body.name

  console.log(email);
// Find user by email
  Users.findOne({ email : req.body.email}).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: token,
              email : email
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
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