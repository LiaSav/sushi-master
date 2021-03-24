$(document).ready(function () {
  $(".carousel__inner").slick({
    dots: true,
    speed: 1200,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
    prevArrow: '<button class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });
});

const year = function () {
  const date = new Date();
  const yyyy = date.getFullYear();
  return yyyy;
};
const footer = document.querySelector(".footer");
footer.innerHTML += "Copyright " + year();
