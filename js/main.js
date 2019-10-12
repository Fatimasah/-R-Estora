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



window.onload = function(){
    var paginationPage = parseInt($('.cdp').attr('actpage'), 10);
    $('.cdp_i').on('click', function(){
      var go = $(this).attr('href').replace('#!', '');
      if (go === '+1') {
        paginationPage++;
      } else if (go === '-1') {
        paginationPage--;
      }else{
        paginationPage = parseInt(go, 10);
      }
      $('.cdp').attr('actpage', paginationPage);
    });
  };