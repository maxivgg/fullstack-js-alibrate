import mongoose from 'mongoose';
require('dotenv').config();

mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(db => {
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
	})
	.catch((err) => {
		console.log("Cannot connect Mongo: ", err);
		process.exit();
	});
