
/*
 *  Side Navbar Function
 */

$('#toggleBtn').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('open');
  $('body').toggleClass('sidemenu-opened');
});


// Show Search Input On Click
$('#mobileSearchBtn').click(function(){
  $('.navbar-search').fadeIn(function () {
    $('.navbar-search .form-control').focus();
  });
});


// Slide News

$('.openSlide').click(
  function() {
    $('#slideNews-container').removeClass('notReading').addClass('reading');
    return false;
  }
);


$('.closeSlide').click(
  function() {
    $('#slideNews-container').removeClass('reading').addClass('notReading');
    return false;
  }
);

