const scroller = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

$( document ).ready(function() {

  $( ".navigation__button" ).on('click', function() {
    $(".navigation__button").toggleClass("navigation__button--open");
    $(".navigation").toggleClass("navigation--open");

    /*$(".navigation__left").toggleClass("navigation__left--open");
    $(".navigation__right").toggleClass("navigation__right--open");*/

    //$(".header").toggleClass("header--open");
  });

}
);
