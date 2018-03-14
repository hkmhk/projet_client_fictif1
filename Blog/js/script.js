// new AnimOnScroll(document.getElementById("grid"), {
//   minDuration: 0.4,
//   maxDuration: 0.7,
//   viewportFactor: 0.2
// });
console.log("coucou");

// // init Isotope
var $grid = $(".grid").isotope({
  // options
});

console.log("coucou");

// filter items on button click
$(".filter-button-group").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  console.log("coucou");

  console.log(filterValue);

  $grid.isotope({ filter: filterValue });
  transitionDuration: "1s";
});


