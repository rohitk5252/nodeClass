const User = require('../models/userModel')
const mongoose = require('mongoose')




// login user 
const loginUser = async (req, res) => {
   const {email, password} = req.body
   try {
        console.log(req.body)
        const user = await User.findOne({email})
        if(!user) {
            throw Error("User does not exists")
        }
        if(user.password !== password) {
            throw Error("Wrong user credentials")
        }
        res.status(200).json({user})
   } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
   }
}


// signup user 
const signupUser = async (req, res) => { 
    const { username, email, password, company } = req.body 
    console.log(req.body)
    try {
        const user = User({username, email, password, company})
        const data = await user.save()
        res.status(200).json({data})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    loginUser, 
    signupUser
}