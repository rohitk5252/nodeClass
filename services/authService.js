const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')


const hashPassword  = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

const matchPassword = async (password, userPassword) => {
   return await bcrypt.compare(password, userPassword)
}


const createToken = async (_id) => {
    return  await jwt.sign({ _id }, process.env.SECRET, { expiresIn: '7d' })
}


const signup = async (username, email, hash, company) => {
    const user = User({username, email, password:hash , company})
    const userData = await user.save()
    return userData
}

const dashboard = async (query) => {
    // todo
}


module.exports = {
    hashPassword,
    matchPassword,
    createToken,
    signup
}