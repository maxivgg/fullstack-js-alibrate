import app from './app.js';
import cors from 'cors';
import './database.js';
app.use(cors());
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  return console.log("Server started on port ".concat(PORT));
});