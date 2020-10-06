// $(document).ready(function () {
  $.ajax({
    url: "html/works_web.html",
    success: function (result) {
      $('.works__work-list').remove();
      $('.works__list').after(result);
    }
  });

  $(".works__link").click(function () {
    let list = $(this).data("list");
    $.ajax({
      url: `html/works_${list}.html`,
      success: function (result) {
        $('.works__work-list').remove();
        $('.works__list').after(result);
      }
    });
  });

  $(".works__work-link").click(function () {
    console.log("aa");
    let list = $(this).data("list");
    $.ajax({
      url: `html/works_${list}.html`,
      success: function (result) {
        $('.works__work-list').remove();
        $('.works__list').after(result);
        data = result;
      }
    });
  });


  //       var refine = $("#message2").html(result).find('li');


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
// });