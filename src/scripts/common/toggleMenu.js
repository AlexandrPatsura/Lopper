export const toggleMenu = function () {

  $('.burger__menu').click(function () {
    $('.burger').toggleClass('toggle-active');
    
    $('.menu').toggleClass('header__menu');
  });

  // $('.burger__menu').click(function () {
    // $('.header__navigation').toggleClass('isActive');
    //   if ($('.menu-fullscreen').is(':visible')) {
    //     $('.menu-fullscreen').css('display', 'none');
    //     $('.user__scroll').css('display', 'flex');
    //   } else {
    //     $('.menu-fullscreen').css('display', 'block');
    //     $('.user__scroll').css('display', 'none');
    //   }
  // });

};