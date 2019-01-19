var sliders = {
  1: { slider1: "#slider1", slider2: "#slider2" }
};

$.each(sliders, function() {
  $(this.slider1).slick({
    accessibility: true,
    arrows: true,
    dots: false,
    infinite: true,
    prevArrow: $("#prev-arrow"),
    nextArrow: $("#next-arrow"),
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(this.slider2).slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0px";
}
