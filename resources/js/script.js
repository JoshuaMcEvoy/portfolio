
$(document).ready(function() {

  // sticky navigation
  $('.js--section-about').waypoint(function(direction){
    if ( direction == 'down' ){
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  // Button scroll
  $('.js--scroll-to-about').click(function(){
    $('html, body').animate({scrollTop: $( '.js--section-about' ).offset().top}, 1000);
  })

  $('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop: $( '.js--section-contact' ).offset().top}, 1000);
  });

  // Navigation button smooth scrolling


  $('.js--wp-1').waypoint(function(direction){
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });
  $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });
  $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });
  $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

  // Mobile navigation

  $('.js--nav-icon').click(function() {
    let nav = $('.js--main-nav');
    let icon = $('.js--nav-icon i')

    nav.slideToggle(200);
    //change icon
    if (icon.hasClass('ion-navicon-round')){
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }

  });

});
