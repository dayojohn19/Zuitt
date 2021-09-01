const User = require('./../models/User');

//insert a new user
module.exports.createUser = function(reqBody){
	let newUser = new User({
		firstName: reqBody.firstName,
		lastName: reqBody.lastName,
		userName: reqBody.userName,
		password: reqBody.password
	});

	return newUser.save().then( (savedUser, error) => {
		if(error){
			return error
		} else {
			return savedUser
		}
	});
}


//retrieve all users
module.exports.getAll = () => {

	//Model.method
	return User.find().then( (result, error) => {
		if(error){
			return error
		} else {
			//send [array of objects] as a response
			return result
		}
	})
}

//retrieve a specific user
module.exports.getUser = (params) => {

	// Model.method
	return User.findById(params).then( (result) => {

		//send user document as a return
		return result
	})
}

module.exports.updateUser = (params, reqBody) => {

	//Model.method
	return User.findByIdAndUpdate(params, reqBody, {new:true}).then( (result, error) => {
		if(error){
			return error
		} else {
			//return user object
			return result
		}

	})	
}


//delete user
module.exports.deleteUser = (params) => {

	return User.findByIdAndDelete(params).then( (result, error) => {
		if(error){
			return false
		} else {
			return true
		}
	})
}