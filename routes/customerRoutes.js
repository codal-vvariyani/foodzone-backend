const express = require('express');
const router = express.Router();

const Customer = require('../models/customer');

//get Customers
router.get('/customers', (req, res, next)=>{
    Customer.find(function(err, customer){
        res.json(customer);
    });
});

//authenticate Customer
router.get('/customer/auth',(req, res, next)=>{
    Customer.find({userName: req.query.userName, password: req.query.password}, function(err, customer) {
        res.json(customer);
    });
});

//get userName of customer
router.get('/customer',(req, res, next)=>{
    Customer.find({userName: req.query.userName}, function(err, customer) {
        res.json(customer);
    });
});

//add customer
router.post('/customers', (req, res, next)=>{
    console.log(req.body);
    
    let newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password
    });

    newCustomer.save((err, customer)=>{
        if(err){
            res.json({msg: "Failed to add customer"});
        }
        else{
            res.json({msg: "Customer added succesfully"});
        }
    });
});
module.exports = router;
