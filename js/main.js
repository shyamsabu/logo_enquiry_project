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
    $('#prev_btn_slide').on('click', function(event) {
      event.preventDefault(); // Prevent the default behavior (page reload)
      $('.slider').slick('slickPrev');
    });

    

    $( "#step-button-1" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "29%"
          }, 1000 );
          $("#step-button-2").removeClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
          $("#step-button-5").removeClass('active');
    });
    $( "#step-button-2" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "50%"
          }, 1000 );
          $(this).addClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
    });
    $( "#step-button-3" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "75%"
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
          $("#step-button-5").removeClass('active'); 
    });
    $( "#step-button-5" ).click(function() {
      $( ".progress-bar span" ).animate({
       width: "99%"
        }, 1000 );
        $(this).addClass('active'); 
        $("#step-button-2").addClass('active'); 
        $("#step-button-3").addClass('active'); 
        $("#step-button-4").addClass('active'); 
    });




    $('.form_wrap_2').hide();
    $('.form_wrap_3').hide();
    $('.form_wrap_4').hide();
    $('.form_wrap_5').hide();

    $( "#next_btn_form_1" ).click(function() {
      $('.form_wrap_2').show();
      $('.form_wrap_1').hide();
      $( ".progress-bar span" ).animate({
          width: "50%"
          }, 1000 );
          $("#step-button-2").addClass('active'); 
    });

    $( "#next_btn_form_2" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').show();
      $( ".progress-bar span" ).animate({
          width: "75%"
          }, 1000 );
          $("#step-button-3").addClass('active'); 
          $("#step-button-2").addClass('active'); 
    });
    $( "#next_btn_form_3" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $( ".progress-bar span" ).animate({
          width: "99%"
          }, 1000 );
          $("#step-button-4").addClass('active'); 
          $("#step-button-3").addClass('active'); 
          $("#step-button-2").addClass('active'); 
    });
    $( "#next_btn_form_4" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_5').show();
      $( ".progress-bar span" ).animate({
          width: "99%"
          }, 1000 );
          $("#step-button-5").addClass('active'); 
          $("#step-button-3").addClass('active'); 
          $("#step-button-2").addClass('active'); 
          $("#step-button-4").addClass('active'); 
    });




    $( "#prev_btn_5" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $('.form_wrap_5').hide();
    });
    $( "#prev_btn_4" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_3').show();
      $('.form_wrap_5').hide();
    });
    $( "#prev_btn_3" ).click(function() {
      $('.form_wrap_3').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_2').show();
      $('.form_wrap_5').hide();
    });
    $( "#prev_btn_2" ).click(function() {
      $('.form_wrap_3').hide();
      $('.form_wrap_2').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_1').show();
      $('.form_wrap_5').hide();
    });



    $('#next_btn_form_5').on('click', function(event){
      event.preventDefault(); 
      $('.slider').slick('slickNext');
    });
  });