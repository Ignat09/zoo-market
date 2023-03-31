document.onreadystatechange = function () {
  let state = document.readyState;
  if (state == "interactive") {
    document.getElementById("contents").style.visibility = "hidden";
    document.getElementById("load").style.visibility = "visible";
    // document.getElementById("load").style.backgroundColor
  } else if (state == "complete") {
    setTimeout(function () {
      document.getElementById("load").style.visibility = "hidden";
      document.getElementById("contents").style.visibility = "visible";
    }, 2000);
  }
};

$(document).ready(function () {
  let coocki = document.cookie;
  $(window).scroll(function () {
    // если происходит скроллинг
    if ($(window).scrollTop() > 200) {
      $("#totop").css("opacity", "0.8"); // непрозрачность восстанавливается
      $(".navbar").css("opacity", "0.6");
      $(".logo").css("font-size", "0").css("transform", "translate(-100%,70%)");
      $("#change").attr("src", "./images/amazon.jpg");
      $("#change1").attr("src", "./images/ozerelovi.jpg");
      $(".logo-nav")
        .css("font-size", "30px")
        .css("transform", "translate(0%,0%)");
    } else {
      $("#totop").css("opacity", "0"); // элемент прозрачный
      $(".navbar").css("opacity", "1");
      $(".logo").css("font-size", "120px").css("transform", "translate(0%,0%)");
      $(".logo-nav")
        .css("font-size", "0")
        .css("transform", "translate(-100%,70%)");
    }

    $(".jumbotron").css(
      "background-position",
      "center " + -($(window).scrollTop() * 0.5 + 120) + "px"
    );
  });
  if (coocki != "") {
    $("#regButton").addClass("hiden");
    $("#hello").text(`Здравствуйте, ${coocki}`);
  }
  else if (coocki == "") {
    $("#regButton").removeClass("hiden");
  }
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     // если происходит скроллинг
//     if ($(window).scrollTop() > 200) {
//       $("#totop").css("opacity", "0.8"); // непрозрачность восстанавливается
//       $(".navbar").css("opacity", "0.6");
//       $(".logo").css("font-size", "0").css("transform", "translate(-100%,70%)");
//       $(".logo-nav")
//         .css("font-size", "30px")
//         .css("transform", "translate(0%,0%)");
//     } else {
//       $("#totop").css("opacity", "0"); // элемент прозрачный
//       $(".navbar").css("opacity", "1");
//       $(".logo").css("font-size", "120px").css("transform", "translate(0%,0%)");
//       $(".logo-nav")
//         .css("font-size", "0")
//         .css("transform", "translate(-100%,70%)");
//     }

//     $(".jumbotron").css(
//       "background-position",
//       "center " + -($(window).scrollTop() * 0.5 + 120) + "px"
//     );
//   });
// });
