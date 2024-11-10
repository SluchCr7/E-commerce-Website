const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken"); 
const { User, ValidateResetPassword , ValidateEmail } = require('../Modules/User')
const bcrypt = require('bcrypt');
const VerificationToken = require('../Modules/VerificationToken');
const sendMail = require('../utils/sendMail')
const crypto = require('crypto')

/**
 * @desc Send password reset link
 * @route POST /api/password/reset
 * @access Public
 */

const sendPasswordResetLink = asyncHandler(async (req, res) => {
    const { error } = ValidateEmail(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    // Check if user has verication token or not
    
    let verificationToken = await VerificationToken.findOne({ userId: user._id })
    
    if (!verificationToken) {
        verificationToken = new VerificationToken({
            userId: user._id,
            token: crypto.randomBytes(32).toString('hex')
        })
        await verificationToken.save()
    }
    const link = `${process.env.DOMAINNAME}/Reset/${user._id}/${verificationToken.token}`
    const html = `
    <div>
        <h1>Please click on the link to reset your password</h1>
        <a href=${link}>Reset Password</a>
    </div>
    `
    sendMail(user.email, 'Reset Password', html)
    res.status(200).json({ message: 'Password reset link sent' })
})


/**
 * @desc Reset password
 * @route POST /api/password/reset/:id/:token
 * @access Public
 */

const resetPassword = asyncHandler(async (req, res) => {
    const { error } = ValidateResetPassword(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    const verificationToken = await VerificationToken.findOne({ userId: user._id , token: req.params.token })
    if (!verificationToken) {
        res.status(404)
        throw new Error('Verification token not found')
    }
    if (!user.isVerified) {
        user.isVerified = true
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    user.password = hashedPassword
    await user.save()
    await VerificationToken.findByIdAndDelete(verificationToken._id)
    res.status(200).json({ message: 'Password reset successful' })
})

module.exports = { sendPasswordResetLink , resetPassword}