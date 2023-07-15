var prevArrow = document.querySelector(".slider__arrows--prev");
var nextArrow = document.querySelector(".slider__arrows--next");
var sliderImages = document.querySelectorAll(".slider__img img");
var currentIndex = 0;

prevArrow.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
    updateSlider();
});

nextArrow.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    updateSlider();
});

function updateSlider() {
    sliderImages.forEach(function (image) {
        image.classList.remove(...image.classList);
    });

    for (var i = 0; i < sliderImages.length; i++) {
        sliderImages[i].classList.add("focus" + (currentIndex + 1) + "-slide" + (i + 1));
    }
}
