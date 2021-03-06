// CRUD Operation
	// - stands for Create, Read, Update and Delete

//Create
	
	//insertOne()
		// insert only 1 document {}
	// db.collections.insertOne();

	db.users.insertOne(
		{
			"firstName": "John",
			"lastName": "Smith"
		}
	);


	//insertMany()
		//Jane Doe
		//Francis Doe

	db.users.insertMany(
		[
			{
				"firstName": "Jane",
				"lastName": "Doe"
			},
			{
				"firstName": "Francis",
				"lastName": "Doe"
			}
		]
	);

//Read
	// retrieve array of documents

	db.users.find();
	//retrieve array of documents

	db.users.find(
		{
			"lastName": "Doe"
		}
	);

//Update

	//updateOne();
		//change the lastname of Jane Doe to Smith
	db.users.updateOne(
		{
			"firstName": "Jane",
			"lastName": "Doe"
		}, 
		{
			$set: { "lastName": "Smith" }
		}
	);

	//updateMany();
		//add status field of married to people with lastname of Smith

	db.users.updateMany(
		{
			"lastName": "Smith"
		},
		{
			$set: { "status": "Married"}
		}
	);

	//let's add field to francis
		//status: single

	db.users.updateOne({"firstName": "Francis"}, {$set: {"status": "Single"}});

	// remove status field of Francis
	db.users.updateOne(
		{
			"_id" : ObjectId("612590097acc227b95fecd17")
		},
		{
			$unset: { "status": "Single" }
		}
	);

	//remove the status of those who have lastname of Smith
	db.users.updateMany(
		{"lastName": "Smith"},
		{
			$unset: { "status":  "Married"}
		}
	);


//Delete

	//deleteOne()
	//delete francis' document
	db.users.deleteOne(
		{
			"_id" : ObjectId("612590097acc227b95fecd17")
		}
	);

	//delete the remaining documents in the users collection
	db.users.deleteMany({});
		// no records found in users collection


