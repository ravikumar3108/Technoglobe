const express = require('express')
const asyncHandler = require("express-async-handler")

const getUSer = (req, res) => {
    res.json("Priyanhsu")
}

module.exports = getUSer 
