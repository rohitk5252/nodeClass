const axios = require('axios')
const NewsArticle = require('../models/newsArticleModel')

const fetchArticles = async () => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.NEWS_API_TOKEN}`)
        NewsArticle.create(res)
    } catch (err) { 
        console.log(err)
    }
    // const articles = await res.json()
    // if(res.ok) {
    //     articles.forEach((article) =>{
    //         console.log(article)
    //     })
    // }
    console.log(res.data.articles)
    // {
    //     source: { id: null, name: 'Financial Express' },
    //     author: null,
    //     title: 'Share Market LIVE: Nifty jumps above 17000, Sensex surges 200 pts; Bank Nifty slips below 39500, RIL shares rise - The Financial Express',
    //     description: 'Share Market News Today | Sensex, Nifty, Share Prices LIVE: On Tuesday, the NSE Nifty 50 rose 69.30 pts or 0.41% to 17,057.70 and BSE Sensex climbed 214.47 pts or 0.37% to 57,843.42. Bank Nifty surged 139.10 pts or 0.35% to 39,501.05.',
    //     url: 'https://www.financialexpress.com/market/share-market-today-live-updates-sensex-nifty-rupee-vs-dollar-asia-us-markets-in-green-fomc-meet-tuesday-21-march/3016953/',   
    //     urlToImage: 'https://www.financialexpress.com/wp-content/uploads/2023/03/Untitled-design-2-15.jpg',
    //     publishedAt: '2023-03-21T06:14:56Z',
    //     content: 'Share Market News Today | Sensex, Nifty, Share Prices LIVE: Domestic indices opened in green on Tuesday. The NSE Nifty 50 rose 69.30 pts or 0.41% to 17,057.70 and BSE Sensex climbed 214.47 pts or 0.3… [+12539 chars]'
    //   }
}


module.exports = {
    fetchArticles
}