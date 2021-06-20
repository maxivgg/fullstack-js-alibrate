"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = require("./models");

var router = require("./routes");

var cors = require("cors");

require('dotenv').config();

var app = (0, _express["default"])();
app.use(cors());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use(router);
app.use(_express["default"]["static"]('public/build'));
db.mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("*******************************");
  console.log("╭-------━━━-╮");
  console.log("╰┃ ┣▇━▇");
  console.log(" ┃ ┃  ╰━▅╮");
  console.log(" ╰┳╯ ╰━━┳Connected");
  console.log("  ╰╮ ┳━━╯ to");
  console.log(" ▕▔▋ ╰╮╭━╮ Mongo");
  console.log(" ╱▔╲▋╰━┻┻╮╲╱▔▔▔╲");
  console.log(" ▏  ▔▔▔▔▔▔▔  O O┃");
  console.log(" ╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱");
  console.log("  ▏╳▕▇▇▕ ▏╳▕▇▇▕");
  console.log("  ╲▂╱╲▂╱ ╲▂╱╲▂╱");
  console.log("*******************************");
})["catch"](function (err) {
  console.log("Cannot connect Mongo: ", err);
  process.exit();
});
var PORT = process.env.PORT || 2000;
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});