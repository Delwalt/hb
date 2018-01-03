
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




/*
 *  Routing News
 */

$(function() {
  String.prototype.decodeHTML = function() {
    return $('<div>', {html: '' + this}).html();
  };

  var $main = $('main'),

    init = function() {

    },

    ajaxLoad = function(html) {
      document.title = html
        .match(/<title>(.*?)<\/title>/)[1]
        .trim()
        .decodeHTML();

      init();
    },

    loadPage = function(href) {
      $main.load(href + ' main>*', ajaxLoad);
    };

  init();

  $(window).on('popstate', function(e) {
    // if (e.originalEvent.state !== null) {
      loadPage(location.href);
    // }
  });

  $(document).on('click', 'a, area', function() {
    var href = $(this).attr('href');

    if (href.indexOf(document.domain) > -1
      || href.indexOf(':') === -1)
    {
      history.pushState({}, '', href);
      loadPage(href);
      return false;
    }
  });
});
