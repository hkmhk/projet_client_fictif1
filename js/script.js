$(document).ready(function() {
  // changement de couleur au scroll
  let hauteur = document.body.clientHeight;
  let scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > hauteur) {
      $(".navbar").css("background-color", "#0d1226");
    } else {
      $(".navbar").css("background-color", "transparent");
    }
  });
  // défilement doux
  $(".js-scrollTo").on("click", function() {
    // Au clic sur un élément
    var page = $(this).attr("href"); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $("html, body").animate({ scrollTop: $(page).offset().top }, speed); // Go
    return false;
  });

  $(".choisirDate").pignoseCalendar({
    click: function(event, context) {
      /**
       * @params this Element
       * @params event MouseEvent
       * @params context PignoseCalendarContext
       * @returns void
       */

      // This is clicked button Element.
      var $this = $(this);

      // You can access event parameter.
      event.preventDefault();

      // You can get target element in `context` variable, This element is same `$(this)`.
      var $element = context.element;

      // You can also get calendar element, It is calendar view DOM.
      var $calendar = context.calendar;
    }
  });

  $(".choisirDate").pignoseCalendar({
    lang: "fr",
    format: "DD-MM-YYYY",
    week: 1 //Tuesday
  });
});
