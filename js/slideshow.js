var slideshow;
var slideLength;
var currentSlide;

window.onload = function()
{
	slideshow = document.querySelectorAll('#slideshow .slide'); /*finds the element with an id = "slideshow" and class = "slide". 
																  used instead of getElementById or getElementsByClassName because it allows for
																  a more complex selector to be chosen.*/
	slideLength = setInterval(changeSlide, 2500);
	currentSlide = 0;
}

function changeSlide(){
    slideshow[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1)%slideshow.length; //use of modulus allows the slideshow to return to slide number 0.
    slideshow[currentSlide].className = 'slide current';
}

/* aided by online tutorial */

/* Berhanu, Y. (2016) Make a simple JavaScript Slideshow without jQuery. 
Available at: https://www.sitepoint.com/make-a-simple-javascript-slideshow-without-jquery/ 
(Accessed: 10 January 2017).*/