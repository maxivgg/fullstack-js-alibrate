import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import User from '../models/User.js';
import Book from '../models/Book.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, usernameExists, emailExists, avatar, newUser, savedUser, token;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password;
            _context.next = 3;
            return User.findOne({
              username: username
            });

          case 3:
            usernameExists = _context.sent;

            if (!usernameExists) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", rees.status(400).json({
              message: 'The user already exists'
            }));

          case 6:
            _context.next = 8;
            return User.findOne({
              email: email
            });

          case 8:
            emailExists = _context.sent;

            if (!emailExists) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'The email already exists'
            }));

          case 11:
            avatar = 'https://graph.facebook.com/10225940148201268/picture?type=square';
            _context.t0 = User;
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 17;
            return User.encryptPassword(password);

          case 17:
            _context.t3 = _context.sent;
            _context.t4 = avatar;
            _context.t5 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3,
              avatar: _context.t4
            };
            newUser = new _context.t0(_context.t5);
            _context.next = 23;
            return newUser.save();

          case 23:
            savedUser = _context.sent;
            token = jwt.sign({
              id: savedUser._id
            }, process.env.ACCESS_TOKEN_SECRET, {
              expiresIn: '15m'
            });
            res.status(201).json({
              token: token,
              savedUser: savedUser
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
export var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, username, password, userFound, matchPassword, token;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, username = _req$body2.username, password = _req$body2.password;
            userFound = null;

            if (!validateEmail(username)) {
              _context2.next = 8;
              break;
            }

            _context2.next = 5;
            return User.findOne({
              email: username
            });

          case 5:
            userFound = _context2.sent;
            _context2.next = 11;
            break;

          case 8:
            _context2.next = 10;
            return User.findOne({
              username: username
            });

          case 10:
            userFound = _context2.sent;

          case 11:
            if (userFound) {
              _context2.next = 13;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: 'User not found'
            }));

          case 13:
            _context2.next = 15;
            return User.comparedPassword(password, userFound.password);

          case 15:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 18;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Invalid password'
            }));

          case 18:
            token = jwt.sign({
              id: userFound._id
            }, process.env.ACCESS_TOKEN_SECRET, {
              expiresIn: process.env.EXPIRES_IN_TOKEN
            });
            res.status(200).json({
              token: token
            });

          case 20:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();