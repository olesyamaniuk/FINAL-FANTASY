$(function () {
  $(".r-m-gallery-list").slick({
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
    prevArrow: ".r-m-gallery-list-left",
    nextArrow: ".r-m-gallery-list-right",
  });
});

$(function () {
  $(".r-m-features-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".r-m-features-list-left",
    nextArrow: ".r-m-features-list-right",
  });
});
$(function () {
  $(".r-m-characters-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,

    cssEase: "linear",
    prevArrow: ".r-m-characters-list-left",
    nextArrow: ".r-m-characters-list-right",
  });
});
