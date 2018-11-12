M.AutoInit();

(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('#post').modal();
});

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
 var height = $(window).scrollTop();
 if (height > 100) {
     $('#topBtn').fadeIn();
 } else {
     $('#topBtn').fadeOut();
 }
});
$(document).ready(function() {
 $("#topBtn").click(function(event) {
     event.preventDefault();
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
 });

});

$(document).ready(function(){
$('.tabs').tabs();
});
