module.exports = (mongoose) => {
	const Users = mongoose.model(
		"users",
		mongoose.Schema({
			_id: String,
			name: String,
			username: String,
			password: String
		})
	);
	return Users;
};