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
var textContents = [
  'find your own style',
  'expand your horizons',
  'discover new options'
];
var currentIndex = 1;

$('.logo').on('click', function(event) {

    $('.hero').css('background-image', backgroundImages[currentIndex]);
    $('.hero .section-title').text(textContents[currentIndex]);
    currentIndex = (currentIndex + 1) % backgroundImages.length;

});

$('.products-list').slick({
        vertical: false,
        arrows: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


})

