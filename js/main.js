$(function () {
    $('#slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        margin: 10,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
          0: {
            items: 1,
            nav: true,
          },
          600: {
            items: 2,
            nav: true,
          },
          1000: {
            items: 4,
            nav: true,
          },
        }
    });
});

