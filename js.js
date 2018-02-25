
//Navbar
$(window).scroll(function () {
if ($(window).scrollTop() > 0){
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
