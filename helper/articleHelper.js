const NewsArticle = require("../models/newsArticleModel");

const getAllArticles = async () => {
  return await NewsArticle.find({});
};

const getMatchingArticles = async (searchQuery) => {
  return await NewsArticle.find({
    $text: {
      $search: searchQuery,
    },
  });
};
const getOutletFilter = async (searchQuery) => {
  console.log("---searchQuery---", searchQuery);
  try {
    const data = await NewsArticle.find({
      $text: {
        $search: searchQuery,
      },
      ["outlet"]: {$exists: true}
    });
    console.log("---data---", data);
    return data;
  } catch (error) {
    console.log("---errr---", error.message);
  }
};

module.exports = {
  getAllArticles,
  getMatchingArticles,
  getOutletFilter,
};
