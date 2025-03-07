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
///meun//

var slide = $(".slider > img");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoslide()", 500);

function autoslide() {
  $(slide[sno]).stop().animate(
    {
      opacity: 0,
    },
    1000
  );
  sno++;

  if (sno > eno) sno = 0;
  $(slide[sno]).stop().animate(
    {
      opacity: 1,
    },
    500
  );
}

$(".slider").hover(
  function () {
    clearInterval(timer);
  },
  function () {
    timer = setInterval("autoslide()", 1000);
  }
);

$(".tabmenu li").click(function () {
  var idx = $(this).index();

  $(".tabmenu2>*").hide().removeClass("on");
  $(".tabmenu2>*").eq(idx).show().addClaas("on");

  $(".tabmenu li").removeClass("on");
  $(this).addClaas("on");
});

var slide1 = $(".gallery >li > a> img");
var sno1 = 0;
var eno1 = slide1.length - 1;
var timer1 = setInterval("autoslide1()", 300);

function autoslide1() {
  $(slide1[sno1])
    .stop()
    .animate(
      {
        left: "100%",
      },
      1000,
      function () {
        $(this).css({ left: "-100%" });
      }
    );
  sno1++;
  if (sno1 > eno1) {
    sno1 = 0;
  }
  $(slide1[sno1]).stop().animate(
    {
      left: "0",
    },
    1000
  );
}
