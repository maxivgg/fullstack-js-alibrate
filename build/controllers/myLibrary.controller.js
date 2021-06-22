import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import User from '../models/User.js';
import Book from '../models/Book.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
export var getUserBooks = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, limit, status, token, decoded, user, booksMyLibrary;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, limit = _req$body.limit, status = _req$body.status;
            token = req.headers['x-access-token'];
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.userId = decoded.id;
            _context.next = 6;
            return User.findById(req.userId);

          case 6:
            user = _context.sent;
            _context.next = 9;
            return Book.find({
              _id: {
                $in: user.booksRead
              }
            }).limit(limit);

          case 9:
            booksMyLibrary = _context.sent;
            res.status(200).json({
              booksMyLibrary: booksMyLibrary
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserBooks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();