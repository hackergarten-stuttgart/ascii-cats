// E96GZYSt4kHRqiZwCOICesSC4BAOA72c API KEY
const request = require("request-promise-native");

// GET Request
async function getCatGif() {
  const cat = await request.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=E96GZYSt4kHRqiZwCOICesSC4BAOA72c&limit=1")
  return cat;
}

module.exports = { getCatGif }
