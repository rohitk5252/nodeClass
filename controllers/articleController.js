const { getAllArticles, getMatchingArticles, getOutletFilter } = require("../helper/articleHelper");

// get all users
const getAll = async (req, res) => {
  try {
    const allArticles = await getAllArticles();
    res.json(allArticles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getMatching = async (req, res) => {
    const {searchQuery} = req.params 
    console.log("searchQuery", searchQuery)

    try {
        const matchingArticles = await getMatchingArticles(searchQuery);
        res.json(matchingArticles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
const getOutlet = async (req, res) => {
  const {searchQuery} = req.params 
  try {
      const matchingArticles = await getOutletFilter(searchQuery);
      res.json(matchingArticles);
  } catch (error) {
      res.status(400).json({ error: error.message });
  }
}
getOutletFilter

module.exports = {
  getOutlet,
  getAll,
  getMatching
};
