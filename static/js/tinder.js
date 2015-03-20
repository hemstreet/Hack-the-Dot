$(document).ready(function(){
  var data = [
    {
      img: 'bushcroissant.jpg',
      desc: 'uhohouh #itsnopretzel'
    },
    {
      img: 'cat.jpg',
      desc: 'Freshly baked might bite #meow'
    },
    {
      img: 'cosplay.jpg',
      desc: 'Lonely croissant seeks dom jelly #lookingtoparty #dtf'
    },
    {
      img: 'croissant_smores.jpg',
      desc: 'Graham crackers are sooo 2014'
    },
    {
      img: 'croissantSleepingBag.jpg',
      desc: 'Stuff it however you like.'
    },
    {
      img: 'croissantTheHut.jpg',
      desc: 'Bwuabwuabwuabwaubwau'
    },
    {
      img: 'obamacroissant.jpg',
      desc: 'My fellow Americans we are invading the French #murca'
    },
    {
      img: 'stuffed.jpg',
      desc: 'meow'
    },
    {
      img: 'usb.jpg',
      desc: 'Fancy meets function, 120GB and 100% snobby.'
    },
    {
      img: 'vintage.jpg',
      desc: 'Unique molding, dry aged in sandwich bag last 20 years. Can\'92t beat a classic.'
    },
    {
      img: 'creepy.jpg',
      desc: 'Day old croissant, lightly sniffed. Will trade for beer or hairpiece.'
    },
    {
      img: 'fancy.jpg',
      desc: 'Check out my croissant swag. Croissant not for sale. #datnewnew'
    },
    {
      img: 'lego.jpg',
      desc: 'Freaking perfectly golden and crispy, but inedible. I cant move. Help me'
    }
  ];

  data.forEach(function (croissant) {
    $('#container').append('<div class="buddy" style="display: block;">' +
      '<div class="avatar"  style="display: block; background-image: url(/static/img/' + croissant.img + ')"></div>' +
      '<p class="description">'+ croissant.desc +'</p>' +
      '<img class="no action" src="/static/img/no.png"/>' +
      '<img class="yes action" src="/static/img/yes.png"/>' +
    '</div>');
  });

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });
  
   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     // $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
     //  alert('Na-na!');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    }
  });

});