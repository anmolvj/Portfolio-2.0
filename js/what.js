let whatData = {
  what1: 'Web Developer. Gradate Student. Denim Lover. Dancer. Runner. Manga Fan. Swimmer',
  what2: 'React. Express. Hapi. Jekyll. Mongo. AWS....and more',
  what3: 'Give up.',
  what4: 'A full time web developer position.'
};

function activateWhat(what){
  $('.what1,.what2, .what3, .what4').removeClass('activeWhat');
  $(what).addClass("activeWhat");
}

$('.what3').addClass('activeWhat');
$('.whatText').text(whatData.what1);


  $('.what1,.what2, .what3, .what4').click((event) => {
    activateWhat(event.target);
    if($(event.target).hasClass('what1')){
      $('.whatText').text(whatData.what2);
    }
    else if($(event.target).hasClass('what2')){
      $('.whatText').text(whatData.what3);
    }
    else if($(event.target).hasClass('what3')){
      $('.whatText').text(whatData.what1);
    }
    else if($(event.target).hasClass('what4')){
      $('.whatText').text(whatData.what4);
    }

  });
