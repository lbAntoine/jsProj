const nextButton = document.querySelector("pc-next");
// var prevButton = document.getElementsById("pc-prev");
var bullet = document.querySelectorAll('pc-pagination-bullet');

const noBullet = false;
const repeat = false;
const noArrows = false;

const slide = document.getElementById('slide');
var slideTotal = slide.length - 1;
var slideCurrent = -1;


var timeInterval = setInterval(function slideRight() {

    if (slide.classList.contains('slide--active')) {
        slide.classList.remove('slide--active');
        slide.classList.add('slide--prev1');
    } else if (slide.classList.contains('slide--prev1')) {
        slide.classList.remove('slide--prev1');
        slide.classList.add('slide--prev2');
    } else if (slide.classList.contains('slide--prev2')) {
        slide.classList.remove('slide--prev2');
        slide.classList.add('slide--next2');
    } else if (slide.classList.contains('slide--next2')) {
        slide.classList.remove('slide--next2');
        slide.classList.add('slide--next1');
    } else if (slide.classList.contains('slide--next1')) {
        slide.classList.remove('slide--next1');
        slide.classList.add('slide--active');
    }
}, 5000);