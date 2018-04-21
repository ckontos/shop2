var axios = require("axios");
var cheerio = require("cheerio");
var Review = require("../models/Article.js");
var path = require("path");


module.exports = function(app) {
app.get("/scrape", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("https://www.carwise.com/auto-body-shops/briggs-collision-llc-concord-nc-28027/465039?p=1&s=d:1#review-list").then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        // Now, we grab every h2 within an article tag, and do the following:
        // console.log(response.data)
        $(".review-item").each(function(i, element) {
            // Save an empty result object
            var result = {};
            
            result.author = $(this)
                    .children("div")
                    .children(".review-header")
                    .children("h4")
                    .children("span")
                    .text()
            result.date = $(this)
                    .children("div")
                    .children(".review-header")
                    .children("h4")
                    .children(".review-date")
                    .text()
            result.rating = $(this)
                    .children("div")
                    .children(".review-body-wrap")
                    .children(".review-body")
                    .children(".review-col-r")
                    .children("h3")
                    .children(".hidden")
                    .text()
            result.summary = $(this)
                    .children("div")
                    .children(".review-body-wrap")
                    .children(".review-body")
                    .children(".review-col-r")
                    .children("p")
                    .text()
        
            // Create a new Review using the `result` object built from scraping
            
                Review.create(result)
                .then(function(dbReview) {
                console.log(JSON.stringify(dbReview));
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
        });
        res.send("Great Success");
       
    });
   
});



app.get("/scrape2", function(req, res) {
    // First, we grab the body of the html with request
    axios.get("https://www.carwise.com/auto-body-shops/briggs-collision-llc-concord-nc-28027/465039?p=2&s=d:1#review-list").then(function(response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);
        // Now, we grab every h2 within an article tag, and do the following:
        // console.log(response.data)
        $(".review-item").each(function(i, element) {
            // Save an empty result object
            var result = {};
            
            result.author = $(this)
                    .children("div")
                    .children(".review-header")
                    .children("h4")
                    .children("span")
                    .text()
            result.date = $(this)
                    .children("div")
                    .children(".review-header")
                    .children("h4")
                    .children(".review-date")
                    .text()
            result.rating = $(this)
                    .children("div")
                    .children(".review-body-wrap")
                    .children(".review-body")
                    .children(".review-col-r")
                    .children("h3")
                    .children(".hidden")
                    .text()
            result.summary = $(this)
                    .children("div")
                    .children(".review-body-wrap")
                    .children(".review-body")
                    .children(".review-col-r")
                    .children("p")
                    .text()
        
            // Create a new Review using the `result` object built from scraping
            
                Review.create(result)
                .then(function(dbReview) {
                console.log(JSON.stringify(dbReview));
                })
                .catch(function(err) {
                    // If an error occurred, send it to the client
                    res.json(err);
                });
        });
        res.send("Great Success");
       
    });
   
});

// delete all reviews
app.delete("/review/deleteAll", function(req, res) {
  // Remove all the reviews
  Review.remove( { } ).then(function(err) {
    res.json(err);
  })
}); 
  
  
  // Route for getting all Reviews from the db
app.get("/review", function(req, res) {
  // Grab every document in the Reviews collection
  
   Review.find({})
    .then(function(dbReview) {
     
      res.json(dbReview);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

  


}