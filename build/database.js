import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function (db) {
  console.log('*******************************');
  console.log('╭-------━━━-╮');
  console.log('╰┃ ┣▇━▇');
  console.log(' ┃ ┃  ╰━▅╮');
  console.log(' ╰┳╯ ╰━━┳Connected');
  console.log('  ╰╮ ┳━━╯ to');
  console.log(' ▕▔▋ ╰╮╭━╮ Mongo');
  console.log(' ╱▔╲▋╰━┻┻╮╲╱▔▔▔╲');
  console.log(' ▏  ▔▔▔▔▔▔▔  O O┃');
  console.log(' ╲╱▔╲▂▂▂▂╱▔╲▂▂▂╱');
  console.log('  ▏╳▕▇▇▕ ▏╳▕▇▇▕');
  console.log('  ╲▂╱╲▂╱ ╲▂╱╲▂╱');
  console.log('*******************************');
}).catch(function (err) {
  console.log('Cannot connect Mongo: ', err);
  process.exit();
});