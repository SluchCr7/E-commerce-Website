const express = require('express')
const route = express.Router()
const { createOrder, getAllOrder , getOrderById ,deleteOrder } = require('../controllers/orderController')


route.route('/')
    .post(createOrder)
    .get(getAllOrder)

route.route('/:id')
    .get(getOrderById)
    .delete(deleteOrder)

module.exports = route