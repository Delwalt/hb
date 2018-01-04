
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
      getData();  // Reinitialize The Get JSON Script so that JSON data loads again.
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
      history.pushState({scrollTop:document.body.scrollTop}, '', href);
      loadPage(href);
      return false;
    }
  });
});







/*
 *  Get Data from Json
 */


function getData(){
  var lowerFoldContainer = $('#lowerFold');

  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'http://hellobanswara.com/n.php');

  ourRequest.onload = function () {
    var ourNews = JSON.parse(ourRequest.responseText);
    renderNewsCards(ourNews);

  };

  ourRequest.send();

  function renderNewsCards(data) {
    var newsCards = '';
    var i;


    for (i = 0; i < 4; i++) {
      newsCards += '<div class="col-md-6 col-lg-3">\n' +
        '                  <div class="news-card _default">\n' +
        '\n' +
        '                    <div class="_news-img">\n' +
        '                      <a href="../news-detail.html">\n' +
        '                        <img src="' + data[i].gambar + '" alt="" class="img-fluid">\n' +
        '                      </a>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="_news-details-box">\n' +
        '                      <div class="_news-title"><a href="../news-detail.html">' + data[i].judul + '</a></div>\n' +
        '                      <div class="_news-details">शहरके लीयो कॉलेज में मंगलवार को छात्राओं ने महिलाओं की सुरक्षा में मददगार रक्षा सूत्र एप डाउनलोड किया।</div>\n' +
        '                    </div>\n' +
        '\n' +
        '                  </div>\n' +
        '                </div>'
    }

    var newsContainer = '<h3 class="section-title f-hindi mb-4">खबर जो आपके काम आये </h3><div class="news-card-stack row  mt-sm-3">' + newsCards + '</div>';
    lowerFoldContainer.append(newsContainer);
  };
};


jQuery(document).ready(function () {
  // Initialise the plugin when the DOM is ready to be acted upon
  getData();
});
