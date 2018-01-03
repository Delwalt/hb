
var lowerFoldContainer = $('#lowerFold');
var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', '../data.json');

ourRequest.onload = function(){
  var ourNews = JSON.parse(ourRequest.responseText);
  renderNewsCards(ourNews);

};

ourRequest.send();

function renderNewsCards(data){
  var newsCards = '';
  var i;


  for(i = 0; i < 4; i++){
    newsCards += '<div class="col-md-6 col-lg-3">\n' +
      '                  <div class="news-card">\n' +
      '\n' +
      '                    <div class="_news-img">\n' +
      '                      <a href="#">\n' +
      '                        <img src="' + data[i].gambar  + '" alt="" class="img-fluid">\n' +
      '                      </a>\n' +
      '                    </div>\n' +
      '\n' +
      '                    <div class="_news-details-box">\n' +
      '                      <div class="_news-title"><a href="#">' + data[i].judul + '</a></div>\n' +
      '                    </div>\n' +
      '\n' +
      '                  </div>\n' +
      '                </div>'
  }

  var newsContainer = '<div class="news-card-stack row  mt-sm-3">' + newsCards + '</div>';
  lowerFoldContainer.append(newsContainer);
};
