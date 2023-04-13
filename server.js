require('./Configuration/mongodbConfig/config.js');
const express=require('express');
const fileUpload = require('express-fileupload'); 
const assignmentRoute=require('./routes/assignment.routes.js');
const profileRoute=require('./routes/teacherProfile.routes.js')
const port=8000;
const app=express();

app.use(fileUpload({
    useTempFiles: true
}));


app.use(express.json());

app.use('/assignment',assignmentRoute);
app.use('/teacherProfile',profileRoute);


app.listen(port,()=>{console.log(`Listening to port ${port} `)})