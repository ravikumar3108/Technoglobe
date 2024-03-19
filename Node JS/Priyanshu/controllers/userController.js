const express = require('express')
const asyncHandler = require("express-async-handler")
const User = require("../models/userSchema")


const createUser = async (req, res) => {
    const { name, email, password } = req.body

    // const user = await User.create({
    //     username: req.body.username,
    //     email: req.body.email,
    //     password: req.body.password,
    // })

    const user = new User({ name, email, password })
    const result = await user.save()
    console.log(result)
    console.log(user)

    res.status(200).json({
        mesaage: "User Create",
    })
}

const loginUser = async(req, res) => {
    console.log(req.body)
}

module.exports = { loginUser, createUser } 
