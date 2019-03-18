const express = require('express');
const router = express.Router();

const Order = require('../models/order');

//get Orders
router.get('/orders', (req, res, next)=>{
    Order.find(function(err, items){
        res.json(items);
    });
});

//add Order
router.post('/orders', (req, res, next)=>{
    console.log(req.body);
    
    let newOrder = new Order({
        totalItems: req.body.totalItems,
        totalPrice: req.body.totalPrice
    });

    newOrder.save((err, item)=>{
        if(err){
            res.json({msg: "Failed to add item"});
        }
        else{
            res.json({msg: "Item added succesfully"});
        }
    });
});

module.exports = router;