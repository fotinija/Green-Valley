$(document).ready(function(){
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

  var owl = $('.gallery__thumbs'),
  galleryItemIndex;
  owl.owlCarousel({
    center: true,
    items: 5,
    stagePadding: 50,
    loop: true,
  }).find('a').on('click', function(e){
    e.preventDefault();
    $(this).closest('.gallery').find('.gallery__main-img').attr('src', $(this).attr('href'));
    galleryItemIndex = $(this).closest('.owl-item').index();
    console.log(galleryItemIndex);
    owl.trigger('to.owl.carousel', galleryItemIndex);
  });

  $('.review__carousel').owlCarousel({
    loop:true,
    nav:true,
    navText:['',''],
    dots: false,
    items:2
  })
  
$('.offers__slides').owlCarousel({
    loop:true,
    items:1
  })
  // $('.offers__slides').bxSlider({
  //   controls:false,
  //   auto:true,
  //   autoHover:true
  // })
});