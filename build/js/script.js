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

  var owl = $('.gallery__thumbs'),
  galleryItemIndex;
  owl.owlCarousel({
    center: true,
    items: 5,
    stagePadding: 50,
    //loop: true,
    responsive: false
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
    galleryItemIndex = $(this).closest('.owl-item').index();
    console.log(galleryItemIndex);
    owl.trigger('to.owl.carousel', galleryItemIndex);
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

