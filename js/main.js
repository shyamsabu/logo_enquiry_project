$(document).ready(function() {
    $('.slider').slick({
      dots: false,
      infinite: false,
      speed: 900,
      slidesToShow: 1,
      adaptiveHeight: false,
      arrows: false,
      draggable: false
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
         width: "0%"
          }, 1000 );
          $("#step-button-2").removeClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
          $("#step-button-5").removeClass('active');
          $("#step-button-1").removeClass('active');
          $('.form_wrap_5').hide();
          $('.form_wrap_4').hide();
          $('.form_wrap_3').hide();
          $('.form_wrap_2').hide();
          $('.form_wrap_1').show();
    });
    $( "#step-button-2" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "29%"
          }, 1000 );
          $("#step-button-1").addClass('active'); 
          $("#step-button-3").removeClass('active'); 
          $("#step-button-4").removeClass('active'); 
          $('.form_wrap_5').hide();
          $('.form_wrap_4').hide();
          $('.form_wrap_3').hide();
          $('.form_wrap_1').hide();
          $('.form_wrap_2').show();
    });
    $( "#step-button-3" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "50%"
          }, 1000 );
          $("#step-button-1").addClass('active'); 
          $("#step-button-4").removeClass('active'); 
          $("#step-button-2").addClass('active'); 
          $('.form_wrap_5').hide();
          $('.form_wrap_4').hide();
          $('.form_wrap_2').hide();
          $('.form_wrap_1').hide();
          $('.form_wrap_3').show();
    });
    $( "#step-button-4" ).click(function() {
        $( ".progress-bar span" ).animate({
         width: "75%"
          }, 1000 );
          $("#step-button-1").addClass('active'); 
          $("#step-button-2").addClass('active'); 
          $("#step-button-3").addClass('active'); 
          $("#step-button-5").removeClass('active'); 
          $('.form_wrap_5').hide();
          $('.form_wrap_2').hide();
          $('.form_wrap_3').hide();
          $('.form_wrap_1').hide();
          $('.form_wrap_4').show();
    });
    $( "#step-button-5" ).click(function() {
      $( ".progress-bar span" ).animate({
       width: "99%"
        }, 1000 );
        $("#step-button-1").addClass('active'); 
        $("#step-button-2").addClass('active'); 
        $("#step-button-3").addClass('active'); 
        $("#step-button-4").addClass('active'); 
          $('.form_wrap_2').hide();
          $('.form_wrap_4').hide();
          $('.form_wrap_3').hide();
          $('.form_wrap_1').hide();
          $('.form_wrap_5').show();
    });




    $('.form_wrap_2').hide();
    $('.form_wrap_3').hide();
    $('.form_wrap_4').hide();
    $('.form_wrap_5').hide();

    $( "#next_btn_form_1" ).click(function() {
      $('.form_wrap_2').show();
      $('.form_wrap_1').hide();
      $( ".progress-bar span" ).animate({
          width: "29%"
          }, 1000 );
          $("#step-button-1").addClass('active'); 
    });

    $( "#next_btn_form_2" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').show();
      $( ".progress-bar span" ).animate({
          width: "50%"
          }, 1000 );
          $("#step-button-1").addClass('active'); 
          $("#step-button-2").addClass('active'); 
    });
    $( "#next_btn_form_3" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $( ".progress-bar span" ).animate({
          width: "75%"
          }, 1000 );
          $("#step-button-3").addClass('active'); 
          $("#step-button-1").addClass('active'); 
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
          $("#step-button-4").addClass('active'); 
          $("#step-button-3").addClass('active'); 
          $("#step-button-2").addClass('active'); 
          $("#step-button-1").addClass('active'); 
    });




    $( "#prev_btn_5" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $('.form_wrap_5').hide();
      $( ".progress-bar span" ).animate({
        width: "75%"
        }, 1000 );
        $("#step-button-5").removeClass('active'); 
        $("#step-button-4").removeClass('active');
    });
    $( "#prev_btn_4" ).click(function() {
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_3').show();
      $('.form_wrap_5').hide();
      $( ".progress-bar span" ).animate({
        width: "50%"
        }, 1000 );
        $("#step-button-3").removeClass('active'); 
    });
    $( "#prev_btn_3" ).click(function() {
      $('.form_wrap_3').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_2').show();
      $('.form_wrap_5').hide();
      $( ".progress-bar span" ).animate({
        width: "28%"
        }, 1000 );
        $("#step-button-2").removeClass('active');
    });
    $( "#prev_btn_2" ).click(function() {
      $('.form_wrap_3').hide();
      $('.form_wrap_2').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_1').show();
      $('.form_wrap_5').hide();
      $( ".progress-bar span" ).animate({
        width: "0%"
        }, 1000 );
        $("#step-button-1").removeClass('active');
    });



    $('#next_btn_form_5').on('click', function(event){
      $("#step-button-5").addClass('active');
      event.preventDefault(); 
      $('.slider').slick('slickNext');
    });



  //color picker code

  const colorDescriptions = {
    red: 'Energy, passion, love',
    orange: 'Fun, vibrant, youthful',
    green: 'Fresh and natural',
    blue: 'Calm and serene',
    pink: 'Romantic and playful'
    // Add more descriptions as needed
  };

  const colorShadesCount = 8;

  const colors = [
    { name: 'red', shades: ['#FFCDD2', '#EF9A9A', '#E57373', '#EF5350', '#F44336', '#E53935', '#D32F2F', '#C62828'] },
    { name: 'orange', shades: ['#F6CD9D', '#F5B051', '#F5A00B', '#F48407', '#F48509', '#F37004', '#F25805', '#F13E04'] },
    { name: 'green', shades: ['#C8E6C9', '#A5D6A7', '#81C784', '#66BB6A', '#4CAF50', '#43A047', '#388E3C', '#2E7D32'] },
    { name: 'blue', shades: ['#BBDEFB', '#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0'] },
    { name: 'pink', shades: ['#F8BBD0', '#F48FB1', '#F06292', '#EC407A', '#E91E63', '#D81B60', '#C2185B', '#AD1457'] }
    // Add more colors with their shades as needed
  ];

  colors.forEach(color => {
    const colorBox = $('<div class="color-box"></div>');

    const tickIcon = $('<div class="tick-icon"></div>');

    const colorInfo = $(`<div class="color-info"><strong>${color.name.charAt(0).toUpperCase() + color.name.slice(1)}</strong><br><em>${colorDescriptions[color.name]}</em></div>`);

    const colorShades = $('<div class="color-shades"></div>');

    // Create 8 color shade boxes
    color.shades.forEach((shade, index) => {
      const shadeBox = $('<span class="shade-box"></span>');
      shadeBox.css('background-color', shade);
      colorShades.append(shadeBox);
    });

    colorBox.click(function () {
      colorBox.toggleClass('selected');
      tickIcon.toggle();
    });

    colorBox.append(tickIcon);
    colorBox.append(colorInfo);
    colorBox.append(colorShades);
    $('#colorTheme').append(colorBox);
  });

  // Helper function to convert hex color to RGB
  function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }


  // ==================logo selection form =====================
  const selectedLogos = [];

  $('.logo_box').on('click', function () {
    const logoId = $(this).find('.logo').data('logo-id');
    const isSelected = $(this).hasClass('selected');

    if (isSelected) {
      // Logo is already selected, remove it from the array
      const index = selectedLogos.indexOf(logoId);
      if (index !== -1) {
        selectedLogos.splice(index, 1);
      }
    } else {
      // Logo is not selected, add it to the array
      selectedLogos.push(logoId);
    }

    // Toggle the 'selected' class for visual feedback
    $(this).toggleClass('selected');

    // Log the selected logos array to the console
    console.log('Selected Logos:', selectedLogos);
  });

  $('#logoSelectionForm').on('submit', function (event) {
    event.preventDefault();
    // Perform any additional actions on form submission if needed
  });
  // ===========================================================


  // font section form 
  const items = [
    { imagePath: "./images/font_preview/modern.png", description: "Item 1", subText: "Crisp with an urban flair" },
    { imagePath: "./images/font_preview/handwritten.png", description: "Item 2", subText: "Add a human touch" },
    { imagePath: "./images/font_preview/elegant.png", description: "Item 3", subText: "Touch of sophistication" },
    // Add more items as needed
  ];

  const selectedItems = [];

  items.forEach((item, index) => {
    const itemBox = $('<div class="item-box"></div>');
    const itemImage = $(`<img src="${item.imagePath}" alt="${item.description}" class="item-image">`);
    const tickIcon = $('<div class="tick-icon"></div>');
    const subtext = $('<span class="subtext"></span>').text(item.subText);

    itemBox.append(itemImage);
    itemBox.append(tickIcon);
    itemBox.append(subtext);

    itemBox.on('click', function () {
      itemBox.toggleClass('selected');
      tickIcon.toggle();
      
      if (itemBox.hasClass('selected')) {
        selectedItems.push(index);
      } else {
        const selectedIndex = selectedItems.indexOf(index);
        if (selectedIndex !== -1) {
          selectedItems.splice(selectedIndex, 1);
        }
      }

      // Log the selected items array to the console
      console.log('Selected Items:', selectedItems);
    });

    $('#itemContainer').append(itemBox);
  });

  $('#itemSelectionForm').on('submit', function (event) {
    event.preventDefault();
    // Perform any additional actions on form submission if needed
  });
  // ========================================

  

//  tagify //

  var $input = $('#tag_inp').tagify({
    whitelist : [
        {"id":1, "value":"some string"}
    ]
  })
  .on('add', function(e, tagName){
      console.log('JQEURY EVENT: ', 'added', tagName)
  })
  .on("invalid", function(e, tagName) {
      console.log('JQEURY EVENT: ',"invalid", e, ' ', tagName);
  });

//  tagify //



// image select//
  function formatState (state) {
    if (!state.id) { return state.text; }
    var $state = $(
      '<span><img src="' + $(state.element).attr('data-src') + '" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  };
  $("#img_select").select2({
    dropdownCss: { "max-height": "200px" }, // Adjust as needed
    minimumResultsForSearch: Infinity,
    templateResult: formatState,
    templateSelection: formatState
  });
});




  