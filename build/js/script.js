// http://osvaldas.info/caching-svg-sprite-in-localstorage

;( function( window, document )
{
    'use strict';

    var file     = 'img/sprite.svg',
        revision = 3;

    if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
        return true;

    var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
        request,
        data,
        insertIT = function()
        {
            document.body.insertAdjacentHTML( 'afterbegin', data );
        },
        insert = function()
        {
            if( document.body ) insertIT();
            else document.addEventListener( 'DOMContentLoaded', insertIT );
        };

    if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
    {
        data = localStorage.getItem( 'inlineSVGdata' );
        if( data )
        {
            insert();
            return true;
        }
    }

    try
    {
        request = new XMLHttpRequest();
        request.open( 'GET', file, true );
        request.onload = function()
        {
            if( request.status >= 200 && request.status < 400 )
            {
                data = request.responseText;
                insert();
                if( isLocalStorage )
                {
                    localStorage.setItem( 'inlineSVGdata',  data );
                    localStorage.setItem( 'inlineSVGrev',   revision );
                }
            }
        }
        request.send();
    }
    catch( e ){}

}( window, document ) );
var types = document.querySelectorAll('.booking-form-type-cottage__inner label');
var content = document.querySelectorAll('.description-cottage');
for (var j = 0; j < content.length; j++) {
  content[j].style.display= "none";
} 
for (var i = 0; i < types.length; i++) {
  types[i].addEventListener ('click', function () {
    for (var j = 0; j < content.length; j++) {
      content[j].style.display= "none";
    } 
    if (document.body.clientWidth > 768 ){
      if (this.firstElementChild.checked) 
        document.querySelector('.js-'+this.firstElementChild.getAttribute('id')).style.display= "block";
    }
  })
}

var inputs = document.querySelectorAll('.booking-form-personal input[type="text"');
var regExprName = /[a-zA-Zа-яА-Я]{3,20}/;
var regExprPhone = /[0-9()+]{3,20}/;
var regExprEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
var valid = false;
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener ('blur', function () {
    var inputName = this.getAttribute('name');
    if (inputName == "name" || inputName == "sirname") {
      valid = regExprName.test(this.value);
    }
    if (inputName == "phone") {
      valid = regExprPhone.test(this.value);
    }
    if (inputName == "email") {
      valid = regExprEmail.test(this.value);
    }
    if (valid) {
      this.classList.remove('error');
      this.classList.add('valid');
    } else {
      this.classList.remove('valid');
      this.classList.add('error');
    }
  })
}


$(document).ready(function(){
  $('#menu_trigger').on('click', function(e){
    e.preventDefault();
    $('#main_nav').slideToggle('slow');
  })
  $('.relax__tabs a').on('click', function(e){
    e.preventDefault();
    $(this)
      .closest('.relax')
      .find('.relax__tab--active')
      .removeClass('relax__tab--active');
    $(this)
      .closest('.relax__tab')
      .addClass('relax__tab--active');
    $(this)
      .closest('.relax')
      .find('.relax__item--active')
      .removeClass('relax__item--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('relax__item--active');
    });
  });

  $('.gallery__main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    cssEase: 'ease-out',
    asNavFor: '.gallery__thumbs'
  });
  
  $('.gallery__thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.gallery__main',
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });

  var owlReview = $('.review__carousel'),
  owlReviewOptions = {
    nav:true,
    navText:['',''],
    dots: false,
    items:2,
    slideBy: 2,
    responsive:false
  };

  $('.review__slide').each(function (){
    $(this).addClass('hidden-xs');
  });
  $('.review__carousel').children(':eq(0)').removeClass('hidden-xs');

  if ( $(window).width() >= 1200 ) {
    owlReview.owlCarousel(owlReviewOptions);
  } else {
    owlReview.addClass('off');
  }

  $(window).on('resize', function() {
    if ( $(window).width() >= 1200 ) {
      if ( owlReview.hasClass('off') ) {
        owlReview.owlCarousel(owlReviewOptions);
        owlReview.removeClass('off');        
      }
    } else {
      if ( !owlReview.hasClass('off') ) {
        owlReview.addClass('off').trigger('destroy.owl.carousel').removeClass('owl-carousel');
        owlReview.find('.owl-stage-outer').children(':eq(0)').unwrap();        
      }
    }
  });


  $('.offers__slides').owlCarousel({
    loop:true,
    items:1
  });

  var owlRoom = $('.room__gallery'),
  owlRoomOptions = {
    loop:true,
    items:1,
    navText:['',''],
    dots:false,
    nav:true,
    responsive:false
  };

   $('.room__gallery-item').each(function (){
    $(this).addClass('hidden-xs');
  });
  $('.room__gallery').children(':eq(0)').removeClass('hidden-xs');

  if ( $(window).width() >= 768 ) {
    owlRoom.owlCarousel(owlRoomOptions);
  } else {
    owlRooms.addClass('off');
  }

  $(window).on('resize', function() {
    if ( $(window).width() >= 768 ) {
      if ( owlRoom.hasClass('off') ) {
        owlRoom.owlCarousel(owlRoomOptions);
        owlRoom.removeClass('off');        
      }
    } else {
      if ( !owlRoom.hasClass('off') ) {
        owlRoom.addClass('off').trigger('destroy.owl.carousel').removeClass('owl-carousel');
        owlRoom.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  });

  var owlRooms = $('.other-rooms__list'),
  owlRoomsOptions = {
    loop:true,
    items:2,
    responsive:false
  };

  if ( ($(window).width() >= 768) && ($(window).width() < 1200) ) {
    owlRooms.owlCarousel(owlRoomsOptions);
  } else {
    owlRooms.addClass('off');
  }

  $(window).on('resize', function() {
    if ( ($(window).width() >= 768) && ($(window).width() < 1200) ) {
      if ( owlRooms.hasClass('off') ) {
        owlRooms.owlCarousel(owlRoomsOptions);
        owlRooms.removeClass('off');        
      }
    } else {
      if ( !owlRooms.hasClass('off') ) {
        owlRooms.addClass('off').trigger('destroy.owl.carousel').removeClass('owl-carousel');
        owlRooms.find('.owl-stage-outer').children(':eq(0)').unwrap();
      }
    }
  });


});

