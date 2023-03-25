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
    },
    outlet: {
        type: String
    }
})

newsArticleSchema.pre('save', function(next) {
    this.outlet = `${this.source.name}`;
    next();
  });
  
newsArticleSchema.index({
    title: 'text',
    content: 'text',
    outlet: 'text'
})


module.exports = mongoose.model('NewsArticle', newsArticleSchema)