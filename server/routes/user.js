var express = require('express');
var User = require("../models/User");
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  User.create({
    email: req.body.email,
    password: req.body.password,
    country: req.body.country,
    hobbies: req.body.hobbies
  }, function(err, user) {
    if (err) {
      console.log(err);
     res.status(401).json({
       success: false,
       message: err
     }); 
    } else {
      console.log(`New user created: ${user._id}`);
      res.status(200).json({ success: true, name: user._id });
    }
  });
});

module.exports = router;
