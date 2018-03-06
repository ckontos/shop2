var images1 = [

    {
        link: "images/top1.png"
    },
    {
        link: "images/top2.png"
    },
    {
        link: "images/top3.png"
    },
    {
        link: "images/top4.png"
    },
    {
        link: "images/top5.png"
    },
    {
        link: "images/top6.png"
    },
    {
        link: "images/top7.png"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsA3z-Vbw1aH1V8rYllBD9aYCrAoJHTferyBdFMFSB7zqKYLV-wQ"
    },
    {
        link: "http://nebula.wsimg.com/0d509fc91af9d9735e2cbcb248321669?AccessKeyId=9094E9E2F84D04C5F2D1&disposition=0&alloworigin=1"
    }


];

var images2 = [{
        link: "images/mid1.png"
    },
    {
        link: "images/mid2.png"
    },
    {
        link: "images/m3.png"
    },

]

var images3 = [{
        link: "images/b1.png"
    },
    {
        link: "images/b2.png"
    },
    {
        link: "images/b3.png"
    },
    {
        link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5i1uUk2zUTBFxsR7cwRgiYJemq5-Xa0UaCZ7u1AWklQDoaKUG"
    }

]


// function to initialize our carousel
function carouselInit() {
    $('.carousel').carousel({
      shift: 50,
    })

}

const carousel = $("<div class='carousel'>"); //create brand new carousel div element
$("#imagesRow1").append(carousel);
images1.forEach(function(result) {
    let pic = result.link;
    // pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    let newImage = $("<a class='carousel-item' href='#'>").append(
         "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage1'></div></a>"
        
        )
    carousel.append(newImage);

});

carouselInit()

images2.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow2").append(newImage)
});


images3.forEach(function(result) {
    let newImage = $("<div class='item'>");
    let pic = result.link;
    pic = "<div class= 'dynamicImage'><img src=" + pic + " class='serviceImage'></div>";
    newImage.append(pic);
    $("#imagesRow3").append(newImage)
});
