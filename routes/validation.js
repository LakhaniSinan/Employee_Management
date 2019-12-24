const joi = require('joi');


function validation(data) {

    const schema = {
        name: joi.string().min(4).max(40),
        email: joi.string().min(6).max(100).email(),
        password: joi.string().min(6).max(1024),
        designation: joi.string().min(6).max(40),
        salary: joi.string()
    }
    
    return  joi.validate(data,schema);
}


module.exports = validation;