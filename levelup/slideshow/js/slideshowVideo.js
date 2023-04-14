/**
 * @author Elias De Hondt
 * @see https://eliasdh.com
 * @since 08/08/2021
 */

var slideIndex = 0;
var videos = document.getElementsByClassName("video");
videos[slideIndex].muted = false; // Unmute the first video
showSlides();

function showSlides() {
    var i;
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
        videos[i].muted = true;
    }
    slideIndex++;
    if (slideIndex > videos.length) {
        slideIndex = 1;
    }
    videos[slideIndex-1].style.display = "block";
    videos[slideIndex-1].muted = false;
    setTimeout(showSlides, 5000); // Change video every 5 seconds
}