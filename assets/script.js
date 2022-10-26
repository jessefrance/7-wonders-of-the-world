$('.banner_carousel_wrapper .owl-carousel').on("initialized.owl.carousel changed.owl.carousel", function (e) {
      $("#counter").text(
          e.relatedTarget.relative(e.item.index) + 1 + "/" + e.item.count
      );

    }).owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      dotsContainer: $('.banner_carousel_wrapper .owl_dots'),
      animateIn: 'fadeIn',
      animateOut: 'fadeOut'
    })