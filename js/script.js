$(document).ready(function() {
  sticky();
  smoothScroll();

  function sticky() {
    new Waypoint.Sticky({
      element: $('.stick-it')[0],
      wrapper: '<div class="sticky-wrapper"/>',
      stuckClass: 'stuck'
    });
  }

  function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') ||
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 80
          }, 600);
        }
      }
    });
  }
});
