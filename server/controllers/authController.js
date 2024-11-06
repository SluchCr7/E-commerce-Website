const asyncHandler = require('express-async-handler')
const jwt = require("jsonwebtoken"); 
const { User, validateUser, UpdateUser , LoginValidate } = require('../Modules/User')
const bcrypt = require('bcrypt')
/**
 * @desc Register new user
 * @route POST /api/auth/register
 * @access Public
 */
const registerUser = asyncHandler(async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) return res.status(400).send('User already exists')

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    await user.save()
    // const token = jwt.sign({ id: user._id }, process.env.TOKEN_SECRET)
    res.status(200).json({ message  : 'User created'})
})

/**
 * @desc Login user
 * @route POST /api/auth/login
 * @access Public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { error } = LoginValidate(req.body)   
    if (error) return res.status(400).send(error.details[0].message)
    // check if user exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Invalid email or password')
    // check if password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(400).send('Invalid email or password')
    // create and assign a token
    const token = jwt.sign({ _id: user._id , isAdmin: user.isAdmin }, process.env.SECRETKEY);
    const { password, ...others } = user._doc
    res.send({ ...others, token });
})

/**
 * @desc Get user profile
 * @route GET /api/auth/:id
 * @access Private
 */

const GetUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    res.status(200).json(user)
})

/**
 * @desc Update user profile
 * @route PUT /api/auth/:id
 * @access Private
 */
const UpdateUserProfile = asyncHandler(async (req, res) => {
    const { error } = UpdateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)
    
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    const user = await User.findByIdAndUpdate(req.user._id, {
        $set: {
            name: req.body.name,
            password: req.body.password,
        }
    }, { new: true })
    await user.save()
    res.status(200).json(user)
})

const DeleteUser = asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
        res.status(404)
        throw new Error('User not found')
    }
    await User.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'User deleted' })
})

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()
    res.status(200).json(users)
})
module.exports = { registerUser , loginUser , GetUserProfile , UpdateUserProfile , DeleteUser , getAllUsers }