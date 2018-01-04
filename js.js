// Typed.js Configuration
var typed = new Typed('.element', {
strings: ["website.", "portfolio.", "canvas.", "world.", "résumé."],
typeSpeed: 80,
backSpeed: 30,
backDelay: 1200,
showCursor: false,
loop: true,
loopCount: Infinity,
});

// Adding functionality to add background to navbar once scrolled past 100px
/* Currently not working on mobile
*/
$(window).scroll(function () {
if ($(window).scrollTop() >= 100){
  $('.navbar').addClass("scrolled");}
else{
  $('.navbar').removeClass("scrolled");}
});
