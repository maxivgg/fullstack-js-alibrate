import app from './app.js';
import cors from 'cors';
import './database.js';
app.use(cors()); //app.use(express.static('public/build'));

var PORT = process.env.PORT || 2000;
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});