$(function(){
function toggleMenu(e) {
  e.preventDefault();
  $('body').toggleClass('fixed');
  $('.hamburger').toggleClass('is-active');
  $('.header .nav_list').toggleClass('active');
  $('.header').toggleClass('menu-open');
  $('.footer').toggleClass('active');
}
$('.hamburger').on('click', function(event) {
  toggleMenu(event);
});

var backgroundImages = [
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_desktop-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_desktop-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_desktop-2x.jpg)'
];
var backgroundImagesTablet = [
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_tablet-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_tablet-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_tablet-2x.jpg)'
];
var backgroundImagesMobile = [
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage1_mobile-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage2_mobile-2x.jpg)',
  'linear-gradient(180deg, rgba(0, 0, 0, 0.84) 0%, rgba(217, 217, 217, 0.00) 100%), url(./assets/images/heroImage3_mobile-2x.jpg)'
];
var textContents = [
  'find your own style',
  'expand your horizons',
  'discover new options'
];
var currentIndex = 0;

$('#btn-next').on('click', function(event) {
  var windowWidth = $(window).width();
    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    };
    $('.hero .section-title').text(textContents[currentIndex]);
    currentIndex = (currentIndex + 1) % backgroundImages.length;
});
$('#btn-prev').on('click', function(event) {
  var windowWidth = $(window).width();

    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    };
    $('.hero .section-title').text(textContents[currentIndex]);
    currentIndex > 0 ? currentIndex = (currentIndex - 1) % backgroundImages.length : currentIndex = backgroundImages.length - 1;

});
$('#btn-current').on('click', function(event) {
  var windowWidth = $(window).width();
  currentIndex = Math.ceil(backgroundImages.length / 2);
    if (windowWidth > 1199) {
      $('.hero').css('background-image', backgroundImages[currentIndex]);
    } else if (windowWidth < 1200 && windowWidth > 767) {
      $('.hero').css('background-image', backgroundImagesTablet[currentIndex]);
    } else {
      $('.hero').css('background-image', backgroundImagesMobile[currentIndex]);
    };
    $('.hero .section-title').text(textContents[currentIndex]);
});

// $('.products-list').slick({
//         vertical: false,
//         arrows: true,
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 5,
//         slidesToScroll: 5,
//   responsive: [
//     {
//       breakpoint: 1199,
//       settings: {
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         arrows: false
//       }
//     },
//     {
//       breakpoint: 320,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false
//       }
//     }
//   ]
// });
$(function(){
  $('.partners-list').slick({
    vertical: false,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]
  });
});

})

