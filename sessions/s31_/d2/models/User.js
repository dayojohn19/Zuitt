let mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
        firstName: {
            type: String,
            required: [true, "First name is required"]
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"]
        },
		userName: String,
		password: String
	}
);

module.exports = mongoose.model("User", userSchema);
