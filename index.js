require('dotenv').config();
const path = require('path')
const fs=require('fs');


// serevr connection
const express = require('express');
const server = express();

//express router
const expressRouter = express.Router();


//cors
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

//api endpoints 
const readData = require('./controllers/index')
server.get('/api', readData);


//middleware 
server.use(express.json());
server.use(cors(corsOptions));
server.use(express.static(path.resolve(__dirname,process.env.PUBLIC_DIR)));

//always write this into bottom
server.use('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'build','index.html'))
})





// database connection
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected"))






server.listen(8080, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log('Server is listening on port 8080');
    }
});
