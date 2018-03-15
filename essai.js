$(document).ready(function(){
    $(".flippy").flip({
        axis: 'y',
        trigger: 'click'
      });

    $('.navbutton__link').click(function(){
        document.querySelector(".navbutton__checkbox").checked = false;
    });

      
});