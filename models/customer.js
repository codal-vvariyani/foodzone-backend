const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
});

const Customer = module.exports = mongoose.model('Customer', CustomerSchema);