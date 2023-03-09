const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const studentSchema = new mongoose.Schema({
    fname : {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required : true,
        unique: true
    },
    email : {
        type: String,
        required: true,
        unique:true
    },
    phone : {
        type: Number,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required:true
    },
    cpassword : {
        type: String,
        required:true
    },
    type : {
        type:String,
        required:true
    },
    gender : {
        type: String,
        required: true
    }
})

//new 

// studentSchema.methods.generateAuthToken = function () {
//     const token = jwt.sign({_id: this._id}, process.env.JWTPRIVATEKEY,{expiresIn: "7d"});
//     return token
// };

// collection

const Register = new mongoose.model("Register", studentSchema);

// new

// const validate = (data) => {
//     const Schema = joi.object({
//         fname:joi.string().required().label("First Name"),
//         roll:joi.string().required().label("Roll Number"),
//         email:joi.string().required().label("Email"),
//         phone:joi.number().required().label("Phone"),
//         password: passwordComplexity().required().label("Password"),
//         cpassword: passwordComplexity().required().label("Confirm Password"),
//         type:joi.string().required().label("Type of Account"),
//         gender:joi.string().required().label("Gender")
//     });
//     return Schema.validate(data);
// };

module.exports = Register;



