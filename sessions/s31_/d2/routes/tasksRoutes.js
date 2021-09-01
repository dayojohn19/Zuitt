
let express = require('express');
let router = express.Router();

//models
let User = require('../../d1/models/User');

//controllers
let userController = require('../../d1/controllers/userControllers');


//insert a new user
router.post("/add-task", (req, res)=>{
	// console.log(req.body);
/*	let newUser = new User({
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				userName: req.body.userName,
				password: req.body.password
			})

	newUser.save( (savedUser, error) => {
		if(error){
			res.send(error)
		} else {
			res.send(`New user saved:`, savedUser);
		}
	})
*/
	userController.createUser(req.body).then(result => res.send(result));

});

//retrieve all users
router.get("/users", (req, res)=>{

	//model.method
		//search users from the database
/*	User.find({}, (error, result)=>{

		if(error){
			res.send(error)
		} else {

			//send it as a response
			res.send(result);
				//return an array of documents
		}
	})
*/

	userController.getAll().then(result => res.send(result));
});

//retrieve a specific user
router.get("/users/:id", (req, res)=>{
	// console.log(req.params);
/*	let params = req.params.id

	//model.method
	User.findById(params, (error, result)=>{
		if(error){
			res.send(error)
		} else {
			//send document as a response
			res.send(result);
		}
	})
*/

	let params = req.params.id

	userController.getUser(params).then( result => res.send(result));
})

//update user's info
router.put("/users/:id", (req, res)=>{
/*	let params = req.params.id
	//model.method
	User.findByIdAndUpdate(params, req.body, {new: true}, (error, result)=>{
		if(error){
			res.send(error);
		} else{
			//send update as a response
			res.send(result);
		}
	})
*/
	// req.body
	let params = req.params.id

	userController.updateUser(params, req.body).then(result => res.send(result))
});

//delete user
router.delete("/users/:id", (req, res)=>{

/*	let params = req.params.id
	// model.method
	User.findByIdAndDelete(params, (error, result)=>{
		if(error){
			res.send(error)
		} else {
			//send a response true if deleted
			res.send(true);
		}
	})
*/	
	let params = req.params.id
	userController.deleteUser(params).then( result => res.send(result))
});


module.exports = router;
