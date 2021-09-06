// Imports
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        console.log('Connected to database')
    }
)


const app = express();
const PORT = process.env.PORT; 

app.use(express.json());
app.use('/api',routes);

app.get('/',(req,res)=>{
    console.log('If that works')
    res.status(201)
    res.send('SIMPLE GET API')
    // res.send('SIMPLE GET API')
})

app.get('/api2/:id',(req,res)=>{
    console.log('If that works')
    res.status(201)
    res.send(req.params.id)
    // res.send('SIMPLE GET API')
})

app.listen(PORT, ()=>{
    console.log("Server started at port : "+ PORT);
})