$(document).ready(function () {
  $(".slider").slick({
    speed: 1200,
    adaptiveHeight: true,
    fade: true,
    cssEase: "linear",
    centerMode: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          dots: true,
        },
      },
    ],
  });
});

const year = function () {
  const date = new Date();
  const yyyy = date.getFullYear();
  return yyyy;
};
const footer = document.querySelector(".footer");
footer.innerHTML += "Copyright " + year();
