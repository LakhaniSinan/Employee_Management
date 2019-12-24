const mongoose = require('mongoose');;

const schema =new  mongoose.Schema({
    name: {
        type: String,
        min:3,
        max:40,
        required:true
    },
    email:{
        type:String,
        min:6,
        max:100,
        required:true
    },
    password:{
        type:String,
        min:6,
        max:1024,
        required:true
    },
    designation:{
        type: String,
        min:3,
        max:40,
        required:true    
    },
    salary:{
        type:String        
    }

})

const Employee = mongoose.model('Employee',schema);

module.exports = Employee;