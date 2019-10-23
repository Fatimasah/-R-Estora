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
    // tabs carousl

    $("#owl-demo2").owlCarousel({
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

    $('.nav-link').click(function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        ($(this).attr("aria-selected") === "true");
        $('.nav-link').removeClass('active');



    });
    $('.owl-item').click(function () {
        $('.owl-item').removeClass('active');
        $(this).addClass('active');

    });

    $("#owl-demo3").owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav: false,
        // dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            300: {
                items: 2
            },
            800: {
                items: 3
            },
            1199: {
                items: 4
            }
        }
    });

    $('.slimScrollDiv1').slimScroll({
        height: '450px',
        size: '6px',
        position: 'left',
        color: '#F2EFEF',
        alwaysVisible: true,
        distance: '0px',
        railVisible: true,
        railColor: '#ffffff',
        allowPageScroll: false,
        disableFadeOut: false
    });

    $('.slimScrollDiv2').slimScroll({
        height: '450px',
        size: '6px',
        position: 'left',
        color: '#F2EFEF',
        alwaysVisible: true,
        distance: '0px',
        railVisible: true,
        railColor: '#ffffff',
        allowPageScroll: false,
        disableFadeOut: false
    });

    $('.slimScrollDiv3').slimScroll({

        height: '450px',
        size: '6px',
        position: 'left',
        color: '#F2EFEF',
        alwaysVisible: true,
        distance: '0px',
        railVisible: true,
        railColor: '#ffffff',
        allowPageScroll: false,
        disableFadeOut: false
    });

    $('.slimScrollDiv4').slimScroll({

        height: '450px',
        size: '6px',
        position: 'left',
        color: '#F2EFEF',
        alwaysVisible: true,
        distance: '0px',
        railVisible: true,
        railColor: '#ffffff',
        allowPageScroll: false,
        disableFadeOut: false
    });



});
$('.form-control').on('input', function () {
    $('.s-clear').show();
});

// $('.form-control').focus(function () {
//     $('.s-clear').show();
// });
// $('.form-control').blur(function () {
//     $('.s-clear').hide();
// });







$('.social-ul').scrollToFixed({
    marginTop: 20,
    // limit: $('t-squad').offset().top -10
    // limit: $('.squad-text').offset().top ,
    limit: $('.t-squad').offset().top - 100
});






// pagination
window.onload = function () {
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function () {
        var go = $(this).attr('href').replace('#!', '');
        if (go === '+1') {
            paginationPage++;
        } else if (go === '-1') {
            paginationPage--;
        } else {
            paginationPage = parseInt(go, 10);
        }
        $('.cdp').attr('actpage', paginationPage);
    });


};

// search animation internal and external pages
function openFun() {
    window.open("html/search-result.html", "_self");
}
function openFunIn() {
    window.open("search-result.html", "_self");
}
function goBack() {
    const element = document.querySelector('.search-result');
    element.classList.remove('fadeInRight');
    element.classList.add('bounceOut');
    window.history.back();
}





// $(".social-ul").scrollToFixed();
