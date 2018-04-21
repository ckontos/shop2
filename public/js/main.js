// window.onload = function() {


    //   // run a call to delete the articles
    //   $.ajax({
    //       method: "DELETE",
    //       url: "/review/deleteAll" 
    //     }).done(function() {
    //       $.ajax({// then run the scrape
    //         method: "GET",
    //         url: "/scrape"
    //       }).done(function(data) {
    //       $.ajax({// then run the scrape
    //         method: "GET",
    //         url: "/scrape2"
    //       })
    //       });

    //     });

    // }


$("#scheduleNowBtn").on("click", function() {
  window.location="contact";
})
