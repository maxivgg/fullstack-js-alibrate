const express = require('express');
const db = require("./models");
const router = require("./routes");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(router);
app.use(express.static('public/build'));

db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));