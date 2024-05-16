$(window).on("load", function(){

  /* sliders */

  $(".owl1").owlCarousel({
    loop: true,
    smartSpeed: 300,
    mouseDrag: true,
    pullDrag: false,
    autoWidth: true,
    dots: false,
    nav: true,
    navText: "",
    responsive:{
      0:{
        center: true,
        nav: true,
      },
      1100:{
        center: false,
        nav: true,
      }
    }
  });

  $('.reviews').owlCarousel({
    items: 1,
    loop: true,
    smartSpeed: 300,
    mouseDrag: true,
    pullDrag: false,
    dots: true,
    nav: true,
    navText: ""
  });

});