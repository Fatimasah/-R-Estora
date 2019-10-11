// 

$(document).ready(function () {

    $("#owl-demo").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
            1199: {
                items: 7
            }
        }
    });







});


// plyr.setup("#plyr-video");