const mongoose = require("mongoose");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");  
const userSchema = new mongoose.Schema({
    name: {
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
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 1024,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    profilePhoto:{
        type : Object, 
        default:{
            url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            publicId : null
        }
    },
});

const User = mongoose.model("User", userSchema);

const validateUser = (user) => {
    const schema = joi.object({
        name: joi.string().min(3).max(50).required(),
        email: joi.string().min(6).max(255).required().email(),
        password: passwordComplexity().required(),
    });
    return schema.validate(user);
};

const UpdateUser = (user) => {
    const schema = joi.object({
        name: joi.string().min(3).max(50),
        password: passwordComplexity(),
    });
    return schema.validate(user);   
}

const LoginValidate = (user) => {
    const schema = joi.object({
        email: joi.string().min(6).max(255).required().email(),
        password: joi.string().min(6).max(255).required(),
    })
    return schema.validate(user)
}

const ValidateEmail = (user) => {
    const schema = joi.object({
        email: joi.string().min(6).max(255).required().email(),
    })
    return schema.validate(user)
}

const ValidateResetPassword = (user) => {
    const schema = joi.object({
        password: passwordComplexity().required(),
    })
    return schema.validate(user)
}
module.exports = { User, validateUser, UpdateUser  , ValidateResetPassword , ValidateEmail,  LoginValidate};