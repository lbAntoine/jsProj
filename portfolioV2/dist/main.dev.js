"use strict";

//Const
var sec = document.getElementById('sec');
var nav = document.getElementById('nav');
var head = document.getElementById('head');
var tog = document.getElementById('toggle'); // var swip = document.getElementById('');

var sclButton = document.querySelectorAll('a'); //Listeneners

sclButton.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    var x = e.clientX - e.target.offsetLeft;
    var y = e.clientY - e.target.offsetTop;
    var ripples = document.createElement('span');
    ripples.style.left = x + 'px';
    ripples.style.top = y + 'px';
    this.appendChild(ripples);
    setTimeout(function () {
      ripples.remove();
    }, 1000);
  });
}); //Functions
//function to toggle the menu button -active class-

function toggleM() {
  sec.classList.toggle('active');
  nav.classList.toggle('active');
  head.classList.toggle('active');
  tog.classList.toggle('active');
} //pages swiperJS


var swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  speed: 500,
  allowTouchMove: false,
  mousewheel: {
    invert: false
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});