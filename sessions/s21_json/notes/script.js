//XML format
/*
	<note>
		<to>Tove</to>
		<from>Jani</from>
		<heading>Reminder</heading>
		<body>Don't forget me this weekend!</body>
	</note>
*/
//JSON format
	//has key value pairs
	//string format - require double quotes
/*	
{
	"to": "Tove",
	"from": "Jani",
	"heading": "Reminder",
	"body": "Don't forget me this weekend!"
}


"cities": [
	{
		"city": "Quezon City",
		"province": "Metro Manila",
		"country": "Philippines"
	},
	{
		"city": "Manila City",
		"province": "Metro Manila",
		"country": "Philippines"
	},
	{
		"city": "Makati City",
		"province": "Metro Manila",
		"country": "Philippines"
	}
]
*/
//JSON Functions in Javascript

let batchesArr = [
	{
		batchName: "Batch 125"
	},
	{
		batchName: "Batch 126"
	}
];

let batchesJSON = `[
	{
		"batchName": "Batch 125"
	},
	{
		"batchName": "Batch 126"
	}

]`;

console.log(batchesArr);
console.log(batchesJSON);



//before sending data, convert an array or an object to its string equivalent 
	// stringify();

console.log( JSON.stringify(batchesArr) );

//Upon receiving data, the JSON text can be converted to a JavaScript Object so that we can use it in our program.
	// parse();
console.log( JSON.parse(batchesJSON) );
