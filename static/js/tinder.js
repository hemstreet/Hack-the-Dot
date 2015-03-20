$(document).ready(function(){
  var data = [
    {
      img: 'bushcroissant.jpg',
      desc: 'meow'
    },
    {
      img: 'cat.jpg',
      desc: 'meow'
    },
    {
      img: 'cosplay.jpg',
      desc: 'meow'
    },
    {
      img: 'croissant_smores.jpg',
      desc: 'meow'
    },
    {
      img: 'croissantSleepingBag.jpg',
      desc: 'meow'
    },
    {
      img: 'croissantTheHut.jpg',
      desc: 'meow'
    },
    {
      img: 'obamacroissant.jpg',
      desc: 'meow'
    },
    {
      img: 'stuffed.jpg',
      desc: 'meow'
    },
    {
      img: 'usb.jpg',
      desc: 'meow'
    },
    {
      img: 'vintage.jpg',
      desc: 'meow'
    }
  ];

  data.forEach(function (croissant) {
    $('#container').append('<div class="buddy" style="display: block;">' +
      '<div class="avatar"  style="display: block; background-image: url(/static/img/' + croissant.img + ')"></div>' +
      '<p class="description">'+ croissant.desc +'</p>' +
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