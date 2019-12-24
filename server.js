const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/Employee');

mongoose.connect('mongodb://localhost/crud')
.then(()=>{ console.log('connected to the database server ...')})
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to employee management system');
})

app.use('/api/employee',employeeRouter)

const port = 5000 || process.env.port;

app.listen(port,()=>{
    console.log(`connected to port ${port} ...`);
})