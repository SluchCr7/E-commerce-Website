const express = require('express')
const route = express.Router()
const { GetUserProfile, getAllUsers, loginUser, registerUser, DeleteUser, UpdateUserProfile } = require('../controllers/authController')

route.route('/register')
    .post(registerUser)

route.route('/login')
    .post(loginUser)

route.route('/:id')
    .get(GetUserProfile)
    .put(UpdateUserProfile)
    .delete(DeleteUser)

route.route('/')    
    .get(getAllUsers)

module.exports = route