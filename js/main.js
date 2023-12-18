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
    { name: 'red', description:'Energy, passion, love', shades: ['#F9BABA', '#F57B7B', '#F45352', '#E43736', '#F01C1A', '#CF0703', '#AF0503', '#880200'] },
    { name: 'orange', description:'Fun, vibrant, youthful', shades: ['#F6CD9D', '#F5B051', '#F5A00B', '#F48407', '#F48509', '#F37004', '#F25805', '#F13E04'] },
    { name: 'yellow', description:'Bright, cheerful, full of joy', shades: ['#FCFCDF', '#FAEBA3', '#F6E36E', '#F5D83C', '#F8E713', '#F7CB10', '#F6BA0F', '#F5A70D'] },

    { name: 'blue', description:'Strength, power, reliability', shades: ['#ECF9FF', '#A4DCFC', '#83D0DB', '#57A9B5', '#75ADF7', '#5984EF', '#4664EE', '#312DC1'] },
    { name: 'purple', description:'Mysterious, luxurious, spiritual', shades: ['#EDB9FF', '#C47BEF', '#B200E2', '#8700C9', '#C4A8E6', '#7E53BA', '#7D00FE', '#5400A7'] },
    { name: 'pink', description:'Love, compassion, playful', shades: ['#F9E7F3', '#F77CC4', '#ED54AD', '#F31297', '#DB93CD', '#E36AB3', '#CE1885', '#AE0B6E'] },

    { name: 'green', description:'Growth, health, wealth', shades: ['#F3F9CC', '#EBF990', '#BCCB8A', '#5C8A60', '#8CB542', '#699635', '#42541C', '#1A3922'] },
    { name: 'brown', description:'Honesty, comfort, stability', shades: ['#E9B076', '#C96A1F', '#8C380A', '#591916', '#9C571D', '#7F4C21', '#4E321B', '#2B150A'] },
    { name: 'grayscale', description:'Honesty, comfort, stability', shades: ['#F8F8F8', '#E6E6E6', '#D6D6D6', '#89939F', '#807979', '#5A5A5D', '#282821', '#0B0909'] },
    // Add more colors with their shades as needed
  ];

  colors.forEach(color => {
    const colorBox = $('<div class="color-box"></div>');

    const tickIcon = $('<div class="tick-icon"></div>');

    const colorInfo = $(`<div class="color-info"><strong>${color.name.charAt(0).toUpperCase() + color.name.slice(1)}</strong><br><em>${color.description}</em></div>`);

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

    { imagePath: "./images/font_preview/classy.png", description: "Item 3", subText: "Stand the test of time" },
    { imagePath: "./images/font_preview/vintage.png", description: "Item 3", subText: "Add a feel of nostalgia" },
    { imagePath: "./images/font_preview/bold.png", description: "Item 3", subText: "Leave an impact" },
    { imagePath: "./images/font_preview/quirky.png", description: "Item 3", subText: "Add a playful twist" },
    { imagePath: "./images/font_preview/thin.png", description: "Item 3", subText: "Show the gentle side" },
    { imagePath: "./images/font_preview/bubbly.png", description: "Item 3", subText: "Cheerful and lively" }
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




  