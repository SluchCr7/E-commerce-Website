const asyncHandler = require('express-async-handler')
const {Order, validateOrder} = require('../Modules/Order')

/**
 * @desc Create new order
 * @route POST /api/orders
 * @access Private
 */
const createOrder = asyncHandler(async (req, res) => {
    const { error } = validateOrder(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const order = new Order({
        name: req.body.name,
        address : req.body.address,
        email: req.body.email,
        phone : req.body.phone,
        order : req.body.order,
    })
    await order.save()
    res.status(200).json(order)
})

/**
 * @desc Get all orders
 * @route GET /api/orders
 * @access Private
 */
const getAllOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find()
    res.status(200).json(orders)
})

/**
 * @desc Get Order By Id
 * @route GET /api/orders/:id
 * @access Private
 */

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) {
        res.status(404)
        throw new Error('Order not found')
    }
    res.status(200).json(order)
})

/**
 * @desc Update Order
 * @route PUT /api/orders/:id
 * @access Private
 */


/**
 * @desc Delete Order
 * @route DELETE /api/orders/:id
 * @access Private
 */

const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (!order) {
        res.status(404)
        throw new Error('Order not found')
    }
    await order.remove()
    res.status(200).json({ message: 'Order deleted' })
})  
module.exports = { createOrder, getAllOrder , getOrderById , deleteOrder}