

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
      .addClass('relax__tabs--active');
    $(this)
      .closest('.relax')
      .find('.relax__item--active')
      .removeClass('relax__item--active')
      .hide();
    $( $(this.hash) ).fadeIn(300, function(){
      $(this).addClass('relax__item--active');
    });
  });

  var owl = $('.gallery__thumbs');//,
  //galleryItemIndex;
  // owl.owlCarousel({
  //   center: true,
  //   items: 5,
  //   stagePadding: 50,
  //   loop: true,
  //   responsive: false
  // }).find('a').on('click', function(e){
  //   e.preventDefault();
  //   $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
  //   galleryItemIndex = $(this).closest('.owl-item').index();
  //   console.log(galleryItemIndex);
  //   owl.trigger('to.owl.carousel', galleryItemIndex);
  // });

  // if ( $(window).width() >= 768 ) {
  //   var owlActive = owl.owlCarousel({
  //   center: true,
  //   items: 5,
  //   stagePadding: 50,
  //   loop: true,
  //   responsive:false
  // });
  // } else {
  //   owl.addClass('off');
  // }

  $('#destroy').click(function(e){
    e.preventDefault();
    owl.trigger('destroy.owl.carousel');
    owl.find('.owl-stage-outer').hide();
  });

   // $(window).resize(function() {
   //   if ( $(window).width() < 768 ) {
   //    owl.trigger('destroy.owl.carousel');
   //    owl.find('.owl-stage-outer').hide();
   //    owl.find('.gallery__main-img').attr('src','img/gallery1.png');
   //   };
   // });
  carousel();
  $(window).resize(function() {
    carousel();
  });

  $('.review__carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:['',''],
    dots: false,
    items:2,
    itemsTabletSmall: false,
    responsive:false
  })
  
  $('.offers__slides').owlCarousel({
    loop:true,
    items:1
  });

  $('.room__gallery').owlCarousel({
    loop:true,
    items:1,
    navText:['',''],
    dots:false,
    nav:true,
  });
});

function carousel() {
  if ( $(window).width() >= 768 ) {
    if ( $('.gallery__thumbs').hasClass('off') ) {
      var owlActive = owl.owlCarousel({
        center: true,
        items: 5,
        stagePadding: 50,
        loop: true,
        responsive: false
      }).find('a').on('click', function(e){
        e.preventDefault();
        $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
        galleryItemIndex = $(this).closest('.owl-item').index();
        console.log(galleryItemIndex);
        owl.trigger('to.owl.carousel', galleryItemIndex);
      });
      owl.removeClass('off');
      owl.find('.owl-stage-outer').show();
    }
  } else {
    if ( !$('.gallery__thumbs').hasClass('off') ) {
      owl.addClass('off').trigger('destroy.owl.carousel');
      console.log('1');
      owl.find('.owl-stage-outer').hide();
      owl.find('.gallery__main-img').attr('src','img/gallery1.png');
    }
  }
}