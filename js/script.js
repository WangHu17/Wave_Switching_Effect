$(".iconWrapper").click(function() {
  $('rect').removeClass("disableAnimation");
  $('img').removeClass("disableAnimation");
  $('div').removeClass("disableAnimation");
  
  $(".iconWrapper").toggleClass("open");
  $(".box").toggleClass("open");
  $("img").toggleClass("open");
  setTimeout(() => {
    $(".navigationWrapper").toggleClass("open");
  }, 350);
});