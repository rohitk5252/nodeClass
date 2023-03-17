const User = require('../models/userModel')


const getAllUsers = async () => {
    return await User.find({}).select(['company', 'email', 'username'])
}

const getSingleUser = async (obj) => {
    return await User.findOne(obj)
}

module.exports = {
    getAllUsers, 
    getSingleUser
}