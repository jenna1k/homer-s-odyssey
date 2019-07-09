const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const connection = require('../../helpers/db.js');

module.exports = passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: false,
    },
    function(email, password, cb) {
      connection.query('SELECT * FROM users WHERE email=?', [email], function(
        err,
        result,
      ) {
        console.log(result);
        if (err) {
          return cb(err);
        }
        if (result.length == 0) {
          return cb(null, false, {message: 'Incorrect email'});
        }
        if (!bcrypt.compareSync(password, result[0].password)) {
          return cb(null, false, {message: 'Incorrect password'});
        }
        if (bcrypt.compareSync(password, result[0].password)) {
          return cb(null, result[0]);
        }
      });
    },
  ),
);

module.exports = passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'your_jwt_secret',
    },
    function(jwtPayload, cb) {
      console.log('jwt', jwtPayload);
      return cb(null, jwtPayload);
    },
  ),
);
