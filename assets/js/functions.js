// -------------- //
// ON WINDOW LOAD //
// -------------- //
window.onload = function() {
  console.log('Loaded :-)');
};

$(".item img").click(function() {
  if ($(this).parent().hasClass("active")) {
    $(".item").removeClass( 'hide');
    $( this ).parent().removeClass( 'active');
  } else {
    $(".item").addClass( 'hide');
    $( this ).parent().removeClass( 'hide');
    $( this ).parent().addClass( 'active');
  }
});



