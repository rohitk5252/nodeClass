const mongoose = require('mongoose')
const Schema = mongoose.Schema


const newsArticleSchema = mongoose.Schema({
    source: {
        id: {
            type: String,  
        },
        name :{
            type: String,  
        }
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

newsArticleSchema.index({
    title: 'text',
    content: 'text',
})


module.exports = mongoose.model('NewsArticle', newsArticleSchema)