const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    totalItems:{
        type: Number,
        required: true
    },
    totalPrice:{
        type: Number,
        required: true
    }
});

const Order = module.exports = mongoose.model('Order', OrderSchema);