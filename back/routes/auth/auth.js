var express = require('express');
var router = express.Router();
const connection = require('../../helpers/db.js');

router.post('/signup', function(req, res, next) {
  var post = {
    email: 'my@email.com',
    password: 'myPassw0rd',
    name: 'James',
    lastname: 'Bond',
  };
  connection.query('INSERT INTO users SET ?', post, function(
    error,
    results,
    fields,
  ) {
    console.log(error);
    if (error) res.status(500).send('error 500');
    else res.status(200).send('working!');

    res.end();
    // Neat!
  });
});

module.exports = router;
