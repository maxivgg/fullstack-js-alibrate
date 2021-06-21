import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import User from '../models/User.js';
export var checkExistsUsernameOrEmail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res, next) {
    var user, email;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findOne({
              username: req.body.username
            });

          case 2:
            user = _context.sent;

            if (!user) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", rees.status(400).json({
              message: 'The user already exists'
            }));

          case 5:
            _context.next = 7;
            return User.findOne({
              email: req.body.email
            });

          case 7:
            email = _context.sent;

            if (!email) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'The email already exists'
            }));

          case 10:
            next();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkExistsUsernameOrEmail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();