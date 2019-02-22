const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Book'
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    price: {
        type:mongoose.Schema.Types.Number,
        required: true
    },
    date: {
        type: mongoose.Schema.Types.Date
    },
    isArchived: {
        type:mongoose.Schema.Types.Boolean,
        default: false
    },
    isPending: {
        type:mongoose.Schema.Types.Boolean,
        default: true
    }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;