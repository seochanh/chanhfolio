$(document).ready(function () {
  $.ajax({
    url: "html/works_web.html",
    success: function (result) {

      var refine = $(".works__work-list--web").html(result);
      // console.log(result);
      console.log(refine);
      console.log(typeof (refine));
      $('.works__list').after(refine);
    }
  });

  // $(".works__link").click(function () {
  //   $.ajax({
  //     url: "html/works.html",
  //     success: function (result) {
  //       $(".container").html(result);
  //     }
  //   });
  // });

  // $("#menu1").click(function () {
  //   $("#message2").empty();
  //   $.ajax({
  //     url: "menu.html",
  //     success: function (result) {
  //       $("#message1").html(result);
  //     }
  //   });
  // });

  // $("#menu2").click(function () {
  //   $("#message1").empty();
  //   $.ajax({
  //     url: "menu.html",
  //     success: function (result) {
  //       var refine = $("#message2").html(result).find('li');
  //       console.log(result);
  //       console.log(refine);
  //       console.log(typeof (refine));
  //       $('#message2').html(refine);
  //     }
  //   });
  // });
});