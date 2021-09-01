
let express = require('express');
let app = express();
let mongoose = require('mongoose');
const PORT = 5000;

//router
let tasksRoutes = require('./routes/tasksRoutes');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://dj19:aa09094553940@cluster0.hpgnf.mongodb.net/test",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	}
).then(()=> console.log(`Connected to Database`))
.catch((error)=> console.log(error));


// schema


// routes
	// request
		//params
		//body
		//headers
		
app.use("/", tasksRoutes);


app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));