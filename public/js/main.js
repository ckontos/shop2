window.onload = function() { // When you click the run-scrape button

 
  // run a call to delete the articles
  $.ajax({
      method: "DELETE",
      url: "/review/deleteAll" 
    }).done(function() {
      $.ajax({// then run the scrape
        method: "GET",
        url: "/scrape"
      }).done(function(data) {
    
      });
    
    });

}


$("#scheduleNowBtn").on("click", function() {
  window.location="contact";
})