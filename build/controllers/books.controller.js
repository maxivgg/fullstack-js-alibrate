import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import Book from '../models/Book.js';
export var createBoook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, author, cover, title, description, genre, isbn13, newBook, bookSaved;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, author = _req$body.author, cover = _req$body.cover, title = _req$body.title, description = _req$body.description, genre = _req$body.genre, isbn13 = _req$body.isbn13;
            newBook = new Book({
              author: author,
              cover: cover,
              title: title,
              description: description,
              genre: genre,
              isbn13: isbn13
            });
            _context.next = 4;
            return newBook.save();

          case 4:
            bookSaved = _context.sent;
            res.status(201).json(bookSaved);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createBoook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
export var getBooks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(req, res) {
    var books;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Book.find();

          case 2:
            books = _context2.sent;
            res.status(200).json(books);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBooks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
export var getBookById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(req, res) {
    var book;
    return _regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Book.findById(req.params.bookId);

          case 2:
            book = _context3.sent;
            res.status(200).json(book);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getBookById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
export var updateBookById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(req, res) {
    var updatedBook;
    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Book.findByIdAndUpdate(req.params.bookId, req.body, {
              new: true
            });

          case 2:
            updatedBook = _context4.sent;
            res.status(200).json(updatedBook);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function updateBookById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
export var deleteBookById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(req, res) {
    var deletedBook;
    return _regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Book.findByIdAndDelete(req.params.bookId);

          case 2:
            deletedBook = _context5.sent;
            res.status(204).json();

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteBookById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();