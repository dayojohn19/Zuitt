/*
	Activity:

	Create an array of objects called courses:

		Each object should have the following fields:

		id -string
		name - string
		description - string
		price - number
		isActive - boolean

	The array should have a minimum of 4 objects.

	//Create
		-Create an arrow function called addCourse which allows us to add a new object into the array. This function should receive the following the data:
			-id,
			-name,
			-description,
			-price
			-isActive
		-This function should be able to show an alert after adding into the array:
			"You have created <nameOfCourse>. Its price is <priceOfCourse>"

	//Retrieve/Read

		-Create an arrow function getSingleCourse which allows us to find a particular course by the providing the course's id.

			-Show the details of the found course in the console.
			-return the found course

		-Create an arrow function getAllCourses which is able to show all of the items/objects in the array in our console.

			-return the courses array

	//Update

		-Create an arrow function called archiveCourse which is able to update/re-assign the isActive property of a particular course, update the isActive property to false. This function should be able to receive the particular index number of the item as an argument.

			-show the updated course in the console.

	
	//Delete
		-Create an arrow function called deleteCourse which is able to delete the last course object in the array.


	Stretch Goals (Added challenge only/No need to accomplish both):

	Create an arrow function which can show all of the active courses only. Show the active courses in the console. See .filter()

	In the archiveCourse function, the function should instead receive the name of the course and use the name to find the index number of the course.  See findIndex()

*/

let courses = [

	{
		id: "1",
		name: "Python 101",
		description: "Learn the basics of python.",
		price: 15000,
		isActive: true

	},
	{
		id: "2",
		name: "CSS 101",
		description: "Learn the basics of CSS.",
		price: 10500,
		isActive: true

	},
	{
		id: "3",
		name: "CSS 102",
		description: "Learn an advanced CSS.",
		price: 15000,
		isActive: false

	},
	{
		id: "4",
		name: "PHP-Laravel 101",
		description: "Learn the basics of PHP and its Laravel framework.",
		price: 20000,
		isActive: true

	}


]

const addCourse = (id,name,description,price,isActive,dateCreated) => {

			courses.push({
				id: id,
				name: name,
				description: description,
				price: price,
				isActive: isActive
			})
			
			alert(`You have created ${name}. It's price is ${price}`)


}

const getSingleCourse = (id) => {

	let foundCourse = courses.find((course)=>{

		return course.id === id

	})
	//displays found course in console
	console.log(foundCourse)
	//returns found course to save in a variable.
	return foundCourse

}

const getAllCourses = () => {

	//displays all courses in console
	console.log(courses)

	//returns all courses
	return courses

}

const archiveCourse = (index) => {

	console.log(index)
	courses[index].isActive = false
	console.log(courses[index])

}

const deleteCourse = () => {
	courses.pop()
}

//Stretch Goal Solution
/*const getActive = () => {

	let activeCourses = courses.filter((course)=>{

		return course.isActive === true

	})

	console.log(activeCourses)

}*/


//Stretch Goal Solution
/*const archiveCourse = (name) => {


	let index = courses.findIndex((course)=>{

		return course.name === name

	})

	console.log(index)
	courses[index].isActive = false
	console.log(courses[index])

}*/
