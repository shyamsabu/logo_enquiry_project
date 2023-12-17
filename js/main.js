$(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 900,
      slidesToShow: 1,
      adaptiveHeight: false,
      arrows: false
    });
  
    $('.lets_get_started_btn').on('click', function(event) {
      event.preventDefault(); // Prevent the default behavior (page reload)
      $('.slider').slick('slickNext');
    });

    

    $( "#step-button-1" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "35%"
          }, 1000 );
          $("#step-button-2").removeClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
    });
    $( "#step-button-2" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "65%"
          }, 1000 );
          $(this).addClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
    });
    $( "#step-button-3" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "99%"
          }, 1000 );
          $(this).addClass('active'); 
          $("#step-button-4").removeClass('active'); 
          $("#step-button-2").addClass('active'); 
    });
    $( "#step-button-4" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "99%"
          }, 1000 );
          $(this).addClass('active'); 
          $("#step-button-2").addClass('active'); 
          $("#step-button-3").addClass('active'); 
    });
      
  });