const db = require("../models");
const Users = db.users;

exports.findAll = (req, res) => {
	Users.find({})
		.then((data) => res.send(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error",
			});
		});
}
exports.login = (req, res) => {
	Users.find({})
		.then((data) => res.send(data))
		.catch((err) => {
			res.status(500).send({
				message: err.message || "Some error",
			});
		});
	/*
			const user = users.find(user => user.name === req.body.name)
			if (user == null) {
				return res.status(400).send('Cannot find user')
			}
			try {
				if(await bcrypt.compare(req.body.password, user.password)) {
					res.send('Success')
				} else {
					res.send('Not Allowed')
				}
			} catch {
				res.status(500).send()
			}*/
}

exports.logout = (req, res) => {
}