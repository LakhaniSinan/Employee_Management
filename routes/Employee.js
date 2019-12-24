const express = require('express');
const Employee = require('../model/model');
const bcrypt = require('bcryptjs');
const router = express.Router();
const validation = require('./validation');

router.get('/', async (req, res) => {
    const employee = await Employee.find();
    res.json(employee)
});

router.get('/:id', async (req, res) => {
    const employee = await Employee.findById({ _id: req.params.id });
    res.json(employee)
});

router.post('/', async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const validate = validation(req.body)


    try {

        if (validate.error) {
            return res.status(400).send(validate.error.details[0].message)
        }
        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            designation: req.body.designation,
            salary: req.body.salary
        })
        await employee.save()
        res.send(employee)
    }
    catch(e){
        console.log(e)
    }
    
});



router.put('/:id', async (req, res) => {
    const employee = await Employee.updateOne({ _id: req.params.id },
        $set = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            designation: req.body.designation,
            salary: req.body.salary
        })
    res.send(employee)
});

router.delete('/:id', async (req, res) => {
    const employee = await Employee.deleteOne({ _id: req.params.id });
    res.send(employee)
});
module.exports = router;