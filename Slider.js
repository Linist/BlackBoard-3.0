$(".Carousel").each(function() {

  var $this = $(this),
      $btns = $this.find(".Carousel-prev, .Carousel-next"),
      $slider = $this.find(".Carousel-slider"),
      $cards = $slider.find(">*"),
      tot = $cards.length,
      i = Math.floor(tot / 2); // Somewhere in the middle

  function anim() {
    i = i < 0 ? tot - 1 : i % tot; // Fix index
    var $active = $cards.eq(i);
    $cards.removeClass('active prev next');
    $active.addClass('active');
    $active.prev().addClass('prev');
    $active.next().addClass('next');
    $slider.css({transform: 'translateX(-${100*i}%)'}); // CSS! yey
  }

  $cards.on("click", function() {
    i = $cards.index(this);
    anim();
  });

  $btns.on("click", function() {
    i = $(this).is(".Carousel-next") ? ++i : --i;
    anim();
  });

  anim();

  // Keyboard nav
  $(document).on("keydown", function(e) {
    var k = e.which;
    if (k === 37 || k === 39) {
      i = k === 39 ? ++i : --i;
      anim();
    }
  });

});