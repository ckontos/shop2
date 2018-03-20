
window.onload = function() { 

 $.ajax({
        method: "GET",
        url: "/review",
    }).done(function(data) {
        getStuff(data)
    })

 function getStuff(data) {
        if (data.length !== 0) {
           
            data.forEach(function(result) {
                if (result.author === "Jason") {
                    console.log("these aren't the droids you're looking for");
                } else {
                var div1 = $("<div>").append(
                     "<div class='card reviewCard'><div class='card-content white-text'><span class='card-title'>" + result.author + "<br>" + result.date + "</span>" +
                      "<p>" + result.summary + "</p>" + "<br>" +
                     
                      "<a class='white-text right' href='https://www.carwise.com/auto-body-shops/briggs-collision-llc-concord-nc-28027/465039'>View Source</a>" + 
                      "</div>" +
                      
                      "</div>" +
                      "</div>"
                );
                // }
                $("#articles").append(div1);
                }
            })

        }

    }
    
//     function getStuff(data) {
//         for (let i = 0; i < data.length; i++) {
//             // console.log(data[i].author)
//             let author = data[i].author
//         if (author === "Jason") {
//             console.log("these aren't the droids you're looking for");
//         } else {
//           var div1 = $("<div>").append(
//                      "<div class='card blue-grey'><div class='card-content white-text'><span class='card-title'>" + data[i].author + "<br>" + data[i].date + "</span>" +
//                       "<p>" + data[i].summary + "</p>" + "<br>" +
                     
//                       "<a class='white-text right' href='https://www.carwise.com/auto-body-shops/briggs-collision-llc-concord-nc-28027/465039'>View Source</a>" + 
//                       "</div>" +
                      
//                       "</div>" +
//                       "</div>"
//                 );

//                 $("#articles").append(div1);
//     }
// }
// }
}