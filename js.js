// Typed.js Configuration
if ($(window).width() > 480) {
  var typed = new Typed('.element', {
  strings: ["website.", "portfolio.", "canvas.", "interests.", "résumé."],
  typeSpeed: 80,
  backSpeed: 30,
  backDelay: 1200,
  showCursor: false,
  loop: true,
  loopCount: Infinity,
  });
}
else {
  var typed = new Typed('.element', {
    strings: ["website."],
    typeSpeed: 80,
    showCursor: false,
  });
}

//Navbar
$(window).scroll(function () {
if ($(window).scrollTop() >= 100){
  $('.navbar').addClass("scrolled");}
else{
  $('.navbar').removeClass("scrolled");}
});

$('.navbar a').click(function(){
    $('.navbar-collapse').collapse('hide');
});

//modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
