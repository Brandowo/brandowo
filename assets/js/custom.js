var currentItem = 0;
var clicked = false;
function anim(){
  $('.vertical-navigation.entrance').css('height','100%')
 }
 $(document).ready(function(){
   setTimeout( anim(),500)
   })
$(document).ready(function(){
  $('nav, ul').addClass('entrance');
  
  setTimeout(function(){
    $('ul a, .dot').addClass('animate');
    $('.track').fadeIn();
  }, 1500);
  
  $('.link').on('click', function(){
    
    if(!clicked){
      clicked = true;
      var el = $(this);
      var index = $(el).index();

      navigate(el, index,  currentItem);

      currentItem = index;

      $('.link, .link .dot').removeClass('in');

      $(el).addClass('in').find('.dot').addClass('in');
    }
  });

});


function navigate(el, index, currentNav){
  var oldPos = $('.link').eq(currentNav).offset();
  var newPos = $('.link').eq(index).offset();
  
  if(index > currentNav){
     
    var velocity = (index - currentNav);
    var speed = ((velocity * 0.5) - (velocity-1)*0.3);
    var calc = (newPos.top - oldPos.top) + 15;
    
    TweenMax.to($('.track'), speed, {height: calc, ease:Expo.easeOut});
    
    setTimeout(function(){
      TweenMax.to($('.track'), speed, {height: 15, top: newPos.top - 65, ease:Expo.easeOut});
    }, (speed * 1000));
    
  }else{
    var bottomPos = $('ul').height() - (oldPos.top + 29);
    var newBottomPos = $('ul').height() - (newPos.top);

    var velocity = (currentNav - index);
    var speed = ((velocity * 0.5) - (velocity-1)*0.3);
    
    $('.track').css({'top' :'auto', 'bottom': bottomPos});

    TweenMax.to($('.track'), speed, {height: ((oldPos.top - newPos.top) + 14), ease:Expo.easeOut});

    setTimeout(function(){
      TweenMax.to($('.track'), speed, {height: 15, bottom: newBottomPos, ease:Expo.easeOut});
      $(el).addClass('in').find('.dot').addClass('in');

      var newPos = $('.link').eq(index).position();
      $('.track').css({'top': newPos.top + 5, 'bottom': 'auto'});

    }, (speed * 1000));
  }
  
  setTimeout(function(){
    clicked = false;
  }, 1200);
}
$(document).ready(function(){
  $("nav").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
$(document).ready(function(){
  $(".one-pkts").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
$(document).ready(function(){
  $(".butt-s").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
$(document).ready(function(){
	/* делаем плавное появление */
        $(".card").fadeIn('slow');
});
//menu-pkts
$(document).ready(function(){
  $('.menu-pkts li').first().on('mouseenter', function(){
    $('.kolo').css('top','32px')
  });
  $('#dos').on('mouseenter', function(){
    $('.kolo').css('top','88px')
  });
  $('#tres').on('mouseenter', function(){
    $('.kolo').css('top','142px')
  });
  $('#quatro').on('mouseenter', function(){
    $('.kolo').css('top','197px')
  });
  $('#cinco').on('mouseenter', function(){
    $('.kolo').css('top','255px')
  });
  $('.one-pkts a:nth-child(1)').on('mouseenter', function(){
    $('.kolo-slide').css('top','36px')
  });
  $('.one-pkts a:nth-child(2)').on('mouseenter', function(){
    $('.kolo-slide').css('top','71px')
  });
  $('.one-pkts a:nth-child(3)').on('mouseenter', function(){
    $('.kolo-slide').css('top','105px')
  });
  $('.one-pkts a:nth-child(4)').on('mouseenter', function(){
    $('.kolo-slide').css('top','140px')
  });
  $('.one-pkts a:nth-child(5)').on('mouseenter', function(){
    $('.kolo-slide').css('top','169px')
  });
  //function kol(param){
   // $('.kolo').css('top',param+'px')
   // }

})
$('#two-inp').focus(function(){
$('#two-lab').addClass('label-active')
})

$('#two-inp').focusout(function(){
$('#two-lab').removeClass('label-active')
})
$('#one-inp').focus(function(){
  $('#one-lab').addClass('label-active')
  })
  
  $('#one-inp').focusout(function(){
  $('#one-lab').removeClass('label-active')
  })
  $('.three-inp').focus(function(){
    $('.thre-lab').addClass('thre-lab-act ')
    })
    
    $('.three-inp').focusout(function(){
    $('.thre-lab').removeClass('thre-lab-act ')
    })