$(document).ready(function() {

  runSlick();
  showHideNavbar();

});


function runSlick() {
  $(".carousel").slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });
};

function showHideNavbar() {
  var scrollValue = 0;

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if ((scrollTop - scrollValue) > 50) {
      var navbarHeight = $(".navbar").css("height");

      $(".navbar").animate({top: "-" + navbarHeight}, 150);
      scrollValue = scrollTop;

    } else if ((scrollValue - scrollTop) > 50) {
      $(".navbar").animate({top: 0}, 150);
      scrollValue = scrollTop;
    }
  });
}
