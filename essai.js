$(document).ready(function() {
  $(".flippy").flip({
    axis: "y",
    trigger: "click"
  });

  $(".navbutton__link").click(function() {
    document.querySelector(".navbutton__checkbox").checked = false;
  });

  let animHome = $("#grandLogo, #reserverBtn, #entete").addClass(
    "animated fadeIn"
  );

  let animAboutR = $("#animRight").addClass("animated FadeInLeft");
  let animAboutL = $("#animLeft").addClass("animated FadeInRight");

  //   var waypoint = new Waypoint({
  //     element: document.getElementById('animRight'),
  //     handler: function() {
  //              let animAboutR = $("#animRight").addClass("animated slideInLeft")}
  //   });
});
