// script.js
document.addEventListener("DOMContentLoaded", function() {
    const promotion = document.querySelector(".promotion");
    const bannerImage = document.querySelector(".banner-image");

    promotion.addEventListener("mouseenter", function() {
        bannerImage.style.transform = "scale(1.1)";
    });

    promotion.addEventListener("mouseleave", function() {
        bannerImage.style.transform = "scale(1)";
    });
});