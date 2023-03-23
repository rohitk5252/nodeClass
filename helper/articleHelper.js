const NewsArticle = require("../models/newsArticleModel");

const getAllArticles = async () => {
  return await NewsArticle.find({});
};

const getMatchingArticles = async (searchQuery) => {
    return await NewsArticle.find({
      $text: {
        $search: searchQuery
      }
    })
}
"bihar station"

module.exports = {
  getAllArticles,
  getMatchingArticles  
};
  