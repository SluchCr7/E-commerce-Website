const mongoose = require("mongoose");
const joi = require("joi");

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    address : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
        unique: true,
    },
    phone : {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 255,
    },
    order : {
        type: Array,
        required: true,
    }
},
    {
        timestamps: true
    }
);

const Order = mongoose.model("Order", OrderSchema);

const validateOrder = (order) => {
    const schema = joi.object({
        name: joi.string().min(3).max(50).required(),
        address : joi.string().min(3).max(50).required(),
        email: joi.string().min(6).max(255).required().email(),
        phone : joi.string().min(6).max(255).required(),
        order : joi.array().required(),
    });
    return schema.validate(order);
};

module.exports = { Order, validateOrder };