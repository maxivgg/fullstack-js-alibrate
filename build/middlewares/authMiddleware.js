import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from 'dotenv';
dotenv.config();
export var authMiddleware = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers['x-access-token'];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: 'No token provided'
            }));

          case 4:
            decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.userId = decoded.id;
            _context.next = 8;
            return User.findById(req.userId);

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(404).jsos({
              message: 'No user found'
            }));

          case 11:
            next();
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(401).json({
              message: _context.t0
            }));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function authMiddleware(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();