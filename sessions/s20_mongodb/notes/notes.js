/*
	Array of Objects
	find()	
*/
let cars = [
	
	{
		brand: "toyota",
		model: "vios",
		price: 1000000
	},
	{
		brand: "BMW",
		model: "BMW X1",
		price: 2500000
	},
	{
		brand: "toyota",
		model: "corolla",
		price: 450000
	}

];

//find() - iterate over items in our array and return the item which will satisfy our condition. find() will return the first item that will satisfy the condition and stop its process right there. If find(), cannot satisfy its condition even after iterating all of the items in the array, it will return undefined. We can even use logical operators for our condition.

let foundCar = cars.find(function(car){

	console.log(car)
	return car.brand === "toyota" && car.model === "Cobra GT"
});

console.log(foundCar);

let users = [

	{
		username: "kimdhyn",
		email: "dahyun@gmail.com",
		password: "dahyunTwiceu"
	},
	{
		username: "jenKimBP",
		email: "jennieSolo@gmail.com",
		password: "dududuJennie",
	},
	{
		username: "lisaBP",
		email: "lisaManoban@gmail.com",
		password: "lisaIsHere"
	}

];

/*
	Mini-Activity:

		Create a new function called login.
			-This function should be able to receive an email and a password.
			-This function should be able to find the user with the correct email and password.
			-Save the returned user into a variable.
			-show the found user object in the console.

			Stretch Goal:
				if we can't find a user with the same email or password:
				Show an alert: Login Failed. Wrong Credentials.
				if we did find a user with the same email or password:
				Show an alert: Thank you for logging in. 

*/

function login(email,password){

	let foundUser = users.find(function(user){

		return user.email === email && user.password === password;

	});

	if(foundUser !== undefined){

		alert("Thank you for logging in.")

	} else {

		alert("Login Failed. Wrong Credentials.")

	};

};

//ES6 Updates for JS
	//ES6 or ECMAScript 6 is an update to the standards of writing Javascript.
	//Through ES6 we have added several important changes in writing Javascript.
	//The let and const keyword are part of the ES6 Update.

	//`` - template literals ${} - placeholder in template literals
	// [] - array literal {} - object literals

	//Creating exponents:
	console.log(Math.pow(5,2));//25
	//Math.pow() raises the first given argument to the power of the number given as a second argument
	//Math.pow(num,exponent)

	//exponent operators
	console.log(5**2);//25
	console.log(10**10);//10000000000

	//Mini-Activity:
	
	//Get the result of 5 raised to the power of 3 and display it in our console. result: 125
	console.log(5**3);
	//Get the result of 5 raised to the power of 5 and display it in our console. result 3125
	console.log(5**5);

	//array/object destructuring

	let person = {

		firstName: "Yusuke",
		lastName: "Urameshi",
		age: 16,
		income: 5000,
		expense: 2000,
		occupation: "Spirit Detective"

	};

	//Display the following message in the console:
	//Hello, Mr. <lastNameOfPerson>, welcome to your account.
	console.log(`Hello, Mr. ${person.lastName}, welcome to your account.`);
	//Your current income is: <incomeOfPerson>
	console.log(`Your current income is ${person.income}`);
	//Your current expense is: <expenseOfPerson>
	console.log(`Your current expense is ${person.expense}`);
	//Mr. <lastNameOfPerson>, your current balance is <incomeOfPerson> - <expenseOfPerson>
	console.log(`Mr. ${person.lastName}, your current balance is ${person.income - person.expense}`);

	//object destructuring:
		//destructuring an object or an array allows us to save the values of properties or array elements in a variable:

		let {expense,lastName,income,powerLevel} = person
		//order of properties destructured from the object does not matter.
		//spelling of the properties being destructured from the object matters. If there is no property in the object and you're trying to destructure that, the result is undefined.
		//If you destructure a property that does not exist in the object, you will get undefined.



		console.log(lastName);
		console.log(income);
		console.log(expense);//if wrong spelling: undefined
		console.log(powerLevel);

		console.log(`Hello, Mr. ${lastName},welcome to your account.`);
		console.log(`Your current income is ${income}`);
		console.log(`Your current expense is ${expense}`);
		console.log(`Mr. ${lastName}, your current balance is ${income - expense}`);

		//Array Destructuring:
			//assign the elements of an array into variables.
			//order of destructuring from an array matters.
			//you can skip elements to assign in variables.
		let koponanNiEugene = ["Dennis","Vincent","Eugene","Alfred","Jeremiah"]

		let firstMem = koponanNiEugene[0];
		let secondMem = koponanNiEugene[1];

		let [member1,,,,member5] = koponanNiEugene;

/*		console.log(firstMem)//Dennis
		console.log(secondMem)//Vincent

		console.log(koponanNiEugene)//*/

		console.log(member1);//Dennis
/*		console.log(member2);//Vincent*/
		console.log(member5);//Jeremiah

		//arrow functions
		//Create a new function which when invoked is able to show an alert.
		function sampleFunction(){

			alert("Hello, I'm a refresher to create regular functions")

		};

		//Creating an arrow function:
		const sampleFunction2 = () => {

			alert("Hello I am from an arrow function.")

		};

		//implicit return with arrow function

		function addNum(num1,num2){
			return num1 + num2
		};

		let sum = addNum(25,25);

		console.log(sum);

		//arrow function with implicit return
			//We can return a value from a function without the use of return keyword so long as:
			//The function codeblock is one-liner and does not have a curly brace.
		const subNum = (num1,num2) => num1 - num2;

		let diff = subNum(25,10);

		console.log(diff);



		//if you have to add curly brace: you have to add the return keyword.
		//Curly brace in the context of function, is our code block.
		//This allows us to add multiple lines.
		const multiplyNum = (num1,num2) => {

			return num1*num2

		};


		let product = multiplyNum(5,10);

		console.log(product);

	//this keyword in arrow functions	
	let person2 = {

		firstName: "Alfred",
		lastName: "Kuwabara",
		age: 16,
		income: 2000,
		expense: 2100,
		occupation: null,
		greet: function(){
			//this keyword in a method refers to the object where the method is.
			console.log(this)
		},
		farewell: () => {
			//this keyword refers to the whole window when used in an arrow function that is a method of an object.
			console.log(person2.firstName)

		}

	};

	person2.greet();
	person2.farewell();

	/*
		Mini-Activity:

		Convert the following syntax using ES6 updates.

	*/

/*	function getCube(num){

		return Math.pow(num,3)

	};*/

	const getCube = (num) => num ** 3

	let numbers = [1,2,3,4,5];

/*	let numberMap = numbers.map(function(number){

		return number * number

	});*/

	let numberMap = numbers.map((number) => number*number);

/*	let allValid = numbers.every(function(number){

		return(number < 3)

	});*/

	let allValid = numbers.every((number)=> number > 3);


/*	let someValid = numbers.some(function(number){

		return(number < 2)

	});
*/
	let someValid = numbers.some((number) => number < 2);

/*	let filterValid = numbers.filter(function(number){

		return (number < 3)

	});*/

	let filterValid = numbers.filter((number)=> number < 3);

/*	let reduceNumber = numbers.reduce(function(x,y){

		return x + y

	});*/

	let reduceNumber = numbers.reduce((x,y) => x + y);



	console.log(getCube(3));
	console.log(numberMap);
	console.log(allValid);
	console.log(someValid);
	console.log(filterValid);
	console.log(reduceNumber);
