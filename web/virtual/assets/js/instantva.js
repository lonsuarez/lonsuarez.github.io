
jQuery(document).ready(function ($) {
  jQuery(document).ready(function () {
    var owl = $('.testimonials-section .owl-carousel');
    owl.owlCarousel({
      margin: 30,
      nav: true,
      loop: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 4500,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  })
  jQuery('#search i').click(function () {
    jQuery('#search').submit();
  });
})


