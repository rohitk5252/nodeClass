const User = require('../models/userModel')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' })
}


// get all users 

const getAll = async (req, res) => {
    try {
        const allUsers = await User.find({}).select(['company', 'email', 'username'])
        console.log("All users", allUsers)
        res.json(allUsers)
    } catch (error) {
        console.log("Error in All users", error.message)
        res.status(400).json({error: error.message})
    }
}

// delete user
const deleteUser = async (req, res) => {
    const {email} = req.body
    try {
        const delRes = await User.findOneAndDelete({email})
        console.log(delRes)
        if(!delRes) {
            throw Error("B-Delete:User does not exists")
        }
        res.status(200).json({delRes, redirect: '/login'})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }
}

// login user 
const loginUser = async (req, res) => {
   const {email, password} = req.body
   try {
        console.log(req.body)
        const user = await User.findOne({email})
        if(!user) {
            throw Error("B-Login: User does not exists")
        }
        const match = await bcrypt.compare(password, user.password)
        if(!match) {
            throw Error("B-Login: Wrong user credentials")
        }
        const token = createToken(user._id)
        res.status(200).json({user, token})
   } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
   }
}


// signup user 
const signupUser = async (req, res) => { 
    const { username, email, password, company } = req.body 
        
    try {
        // generating salt  and hashing password
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = User({username, email, password:hash , company})


        const data = await user.save()
        const token = createToken(user._id)
        res.status(200).json({data, token})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    getAll,
    loginUser, 
    signupUser,
    deleteUser
}     