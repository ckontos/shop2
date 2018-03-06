var axios = require("axios");
var cheerio = require("cheerio");
var Article = require("../models/Article.js");
var path = require("path");


module.exports = function(app) {
app.get("/scrape", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("https://www.yellowpages.com/monroe-nc/mip/mcneills-body-shop-459617928").then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        // Now, we grab every h2 within an article tag, and do the following:
        // console.log(response.data)
        $(".entry").each(function(i, element) {
            // Save an empty result object
            var result = {};
           
           result.author = $(this)
                .children(".review-info")
                .children("a")
                .text()
            result.date = $(this)
                .children(".review-info")
                .children(".review-dates")
                .children("p")
                .text()
            result.summary = $(this)
               .children(".review-response")
                .children("p")
                .text();
                
            // Create a new Article using the `result` object built from scraping
            
                Article.create(result)
                .then(function(dbArticle) {
                console.log(JSON.stringify(dbArticle));
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
        });
        res.send("Great Success");
        // res.sendFile(path.join(__dirname, "../public/index.html"));
    });
   
});

// delete all articles
app.delete("/articles/deleteAll", function(req, res) {
  // Remove all the articles
  Article.remove( { } ).then(function(err) {
    res.json(err);
  })
  
  
  
  // Route for getting all Articles from the db
app.get("/articles", function(req, res) {
  // Grab every document in the Articles collection
  
   Article.find({})
    .then(function(dbArticle) {
     
      res.json(dbArticle);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

  
    
});





}