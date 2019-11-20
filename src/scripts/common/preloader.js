export const preloader = function () {

  $(window).on('load', function () {
    $('.preload-square').fadeOut();
    $('.preload').fadeOut('slow');
  });

};