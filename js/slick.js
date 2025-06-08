$(function () {
  $(".t-e-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".t-e-gallery-list-left",
    nextArrow: ".t-e-gallery-list-right",
  });
});

$(function () {
  $(".t-e-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".t-e-features-list-left",
    nextArrow: ".t-e-features-list-right",
  });
});
