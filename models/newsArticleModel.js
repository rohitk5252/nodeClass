const mongoose = require('mongoose')
const Schema = mongoose.Schema


const newsArticleSchema = mongoose.Schema({
    source: {
        type: String
    },
    author: {
        type: String
    },
    title :{
        type: String
    },
    description: {
        type: String
    },
    url :{
        type: String
    },
    urlToImage: {
        type: String
    },
    content: {
        type: String
    },
    publishedAt : {
        type: String
    }
})


module.exports = mongoose.model('NewsArticle', newsArticleSchema)