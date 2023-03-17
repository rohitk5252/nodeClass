const User = require('../models/userModel')


const deleteOneUser = async (obj) => {
   return await User.findOneAndDelete(obj)
}

module.exports = {
    deleteOneUser
}