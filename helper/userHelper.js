const User = require('../models/userModel')
const NewsArticle = require('../models/newsArticleModel')


const getAllArticles = async () => {
    return await NewsArticle.find({})
}

const getSingleUser = async (obj) => {
    return await User.findOne(obj)
}

module.exports = {
    getAllArticles, 
    getSingleUser
}