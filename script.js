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
});
