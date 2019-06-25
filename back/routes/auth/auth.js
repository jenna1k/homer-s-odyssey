var express = require('express');
var router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {
  var post = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    lastname: req.body.lastname,
  };
  connection.query('INSERT INTO users SET ?', post, function(
    error,
    results,
    fields,
  ) {
    console.log(error);
    if (error) res.status(500).json({flash: error.message});
    else res.status(200).json({flash: 'User has been signed up!'});

    res.end();
    // Neat!
  });
});

module.exports = router;
