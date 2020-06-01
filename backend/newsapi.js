const superagent = require("superagent");

const NEWS_API_URL = "http://newsapi.org/v2";
const TOP_HEADLINES_ENDPOINT_PATH = "/top-headlines";
const API_KEY = "1364cc0f8e874a25acf25b1cf8b9c1ce";

const getMainArticles = query =>
  superagent
    .get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
    .query({ ...query, country: "us", apiKey: API_KEY, pageSize: 30 });

module.exports = {
  getMainArticles
};
