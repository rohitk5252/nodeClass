const User = require('../models/userModel')

const getSingleUser = async (obj) => {
    return await User.findOne(obj)
}

module.exports = {
    getSingleUser
}