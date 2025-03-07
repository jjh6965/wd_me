$(function () {
  $(".menu").hover(
    function () {
      $(this).find(".subMenu").stop().fadeIn();
    },
    function () {
      $(".subMenu").stop().fadeOut();
    }
  );
});
