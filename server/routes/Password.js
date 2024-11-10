const route = require('express').Router()
const { sendPasswordResetLink, resetPassword } = require('../controllers/passwordController')

route.route('/reset').post(sendPasswordResetLink)
route.route('/reset/:id/:token').post(resetPassword)

module.exports = route