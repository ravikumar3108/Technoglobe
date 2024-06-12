const User = require("../models/userModels")

const createUser = async (req, res) => {
    try {
        const { user, email, password } = req.body
        const newuser = await User({
            name: user,
            email: email,
            password: password
        })
        await newuser.save()
        res.json({
            mesage: newuser,
            status: true
        })
    } catch (err) {
        res.json({
            status: err
        })
    }
}

const loginUser = async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    const login = await User.findOne({ email })
    res.json({
        login: login,
        status: true
    })
}



module.exports = { loginUser, createUser }