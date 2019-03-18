const express = require('express');
const router = express.Router();

const Item = require('../models/item');

//get Items
router.get('/items', (req, res, next)=>{
    Item.find(function(err, items){
        res.json(items);
    });
});

//add Item
router.post('/items', (req, res, next)=>{
    console.log(req.body);
    
    let newItem = new Item({
        Name: req.body.Name,
        Price: req.body.Price
    });

    newItem.save((err, item)=>{
        if(err){
            res.json({msg: "Failed to add item"});
        }
        else{
            res.json({msg: "Item added succesfully"});
        }
    });
});

module.exports = router;