window.onload = function() { // When you click the run-scrape button

  // empty the article container
//   $("#articles").empty();
  // run a call to delete the articles
  $.ajax({
      method: "DELETE",
      url: "/articles/deleteAll" 
    }).done(function() {
      $.ajax({// then run the scrape
        method: "GET",
        url: "/scrape"
      }).done(function(data) {
       console.log("in main.js " + JSON.stringify(data));
        // getJson();
         // reload the page
    //   location.reload();
      });
    
    });

}