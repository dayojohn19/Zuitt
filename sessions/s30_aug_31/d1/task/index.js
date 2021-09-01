
// put 
//  npm install express nodemon mongoose

const express = require('express');
const mongoose = require('mongoose'); //this code is to be used on out database connection and creation for our existing MongoDb


const app = express(); // creating a server through the use of app
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//mongoose.connect - is a way to connect our mongodb atlas db connection string

mongoose.connect("mongodb+srv://dj19:aa09094553940@cluster0.hpgnf.mongodb.net/b125-tasks?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
} )
.then (()=>{
    console.log("successfully Connected to Database!");
})
.catch((error)=>{
    console.log(error);
});

const taskSchema = new mongoose.Schema({
    name: String,
    status: {
        type: Boolean,
        default: false
    }
})  
/// Models
const Task = mongoose.model('Task', taskSchema);



const userSchema = new  mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String,
    password: String
})
//
const User = mongoose.model(`User`, userSchema);
//
app.post('/add-task',(req, res)=>{
    let newTask = new Task ({
        name: "Bagay kay sir Chris",
        rich: false
    });
    newTask.save((error, savedTask)=>{
        if (error) {
            console.log(error);
        }else{
            res.send(`New task saved! ${savedTask}`);
        }
    });
});
app.put('/complete-task/:taskId', (req,res)=>{
    let TaskId = req.params.taskId;
    res.send({ urlParams: req.params.taskId});
    Task.findByIdAndUpdate(taskId, (error)=>{
        if (error) {
            console.log(error);
        }else {
            res.send(`Task put true`);
            TaskId.status == true;
        }
    })
})




///
app.listen(port, ()=> console.log(`server is running ${port}`));
// app.listen(port, ())


