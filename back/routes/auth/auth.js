const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('./passport-config');
const jwt = require('jsonwebtoken');
const connection = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {
  const post = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    lastname: req.body.lastname,
  };
  connection.query('INSERT INTO users SET ?', post, function(
    error,
    results,
    fields,
  ) {
    if (error) res.status(500).json({flash: error.message});
    else res.status(200).json({flash: 'User has been signed up!'});

    res.end();
    // Neat!
  });
});

router.post('/signin', function(req, res) {
  passport.authenticate('local', (err, user, info) => {
    if (err) return res.status(500).send(err);
    if (!user) return res.status(400).json({message: info.message});
    if (user) {
      const data = {
        email: user.email,
        name: user.name,
      };
      const token = jwt.sign(data, 'your_jwt_secret');
      return res.status(200).json({data, token});
    }
  })(req, res);
});

module.exports = router;
