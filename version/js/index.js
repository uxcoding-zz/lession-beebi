// https://github.com/woocommerce/FlexSlider/wiki/FlexSlider-Properties
// $sliderItemTotal = $(".slider-item-total"),

function flexHome() {
  $('.slider-Box .flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    touch: true,
    keyboard: true,
    pauseOnHover: true,
    prevText: "",
    nextText: ""
  });
}
