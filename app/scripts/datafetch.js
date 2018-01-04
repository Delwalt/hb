function getData() {
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
        '                      <a href="#">\n' +
        '                        <img src="' + data[i].gambar + '" alt="" class="img-fluid">\n' +
        '                      </a>\n' +
        '                    </div>\n' +
        '\n' +
        '                    <div class="_news-details-box">\n' +
        '                      <div class="_news-title"><a href="#">' + data[i].judul + '</a></div>\n' +
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
