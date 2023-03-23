const axios = require('axios')
const NewsArticle = require('../models/newsArticleModel')

const fetchArticles = async () => {
    try{

        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_TOKEN}`)
        const deleted = await NewsArticle.deleteMany({})
        const news = await NewsArticle.create(res.data.articles)
        
        console.log("cron job ran")
    } catch (err) { 
        console.log(err)
    }
}


module.exports = {
    fetchArticles
}