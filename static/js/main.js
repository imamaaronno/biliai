document.addEventListener("DOMContentLoaded", function () {
  var reviewCarousel = document.getElementById("reviewsCarousel");
  var progressBar = document.querySelector(".progress-bar");
  var currentSlide = document.querySelector(".carousel-progress .current");
  var totalSlides = document.querySelectorAll(
    "#reviewsCarousel .carousel-item",
  ).length;

  function updateProgress(index) {
    // Calculate the width of each third
    var thirdWidth = 1 / totalSlides;

    // Fill up the progress bar based on the current index
    progressBar.style.transform =
      "scaleX(" + thirdWidth + ") translateX(" + index * 100 + "%)";

    // Update the current slide number
    currentSlide.textContent = String(index + 1).padStart(2, "0");
  }

  reviewCarousel.addEventListener("slide.bs.carousel", function (event) {
    updateProgress(event.to);
  });

  // Initialize the progress bar and current slide number
  updateProgress(0);

  // Add click event to carousel indicators
  document
    .querySelectorAll(".carousel-indicators button")
    .forEach(function (indicator, index) {
      indicator.addEventListener("click", function () {
        updateProgress(index);
      });
    });

  // Enable touch swiping on mobile devices
  var hammer = new Hammer(reviewCarousel);
  hammer.on("swipeleft", function () {
    $(reviewCarousel).carousel("next");
  });
  hammer.on("swiperight", function () {
    $(reviewCarousel).carousel("prev");
  });
});
