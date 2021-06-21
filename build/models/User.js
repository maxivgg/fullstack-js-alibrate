import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import mongoose from 'mongoose';
var Schema = mongoose.Schema,
    model = mongoose.model;
import bcrypt from 'bcryptjs';
var userSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  booksRead: [{
    ref: "Book",
    type: Schema.Types.ObjectId
  }],
  booksReading: [{
    ref: "Book",
    type: Schema.Types.ObjectId
  }],
  booksWishlist: [{
    ref: "Book",
    type: Schema.Types.ObjectId
  }],
  booksAbandoned: [{
    ref: "Book",
    type: Schema.Types.ObjectId
  }]
}, {
  timestamps: true
});

userSchema.statics.encryptPassword = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(password) {
    var salt;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return bcrypt.genSalt(10);

          case 2:
            salt = _context.sent;
            _context.next = 5;
            return bcrypt.hash(password, salt);

          case 5:
            return _context.abrupt("return", _context.sent);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

userSchema.statics.comparedPassword = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(password, recivedPassword) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return bcrypt.compare(password, recivedPassword);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

export default model('User', userSchema);