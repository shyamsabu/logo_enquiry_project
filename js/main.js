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
      // $('.slider').slick('slickNext');

      var formWrapClass = 'step0_form';

      // Call the validateForm function
      var isValid = validateForm(formWrapClass);

      // Check if the form is valid
      if (isValid) {
          // Your code here if the form is valid
          console.log('Form is valid. Proceed with your code.');
          $('.slider').slick('slickNext');
      } else {
          // Your code here if the form is not valid
          console.log('Form is not valid. Please check the validation messages.');
      }


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
        $("#step-button-2").removeClass('active')
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
        $("#step-button-3").removeClass('active'); 
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
        $("#step-button-4").removeClass('active'); 
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
    // $('.form_wrap_2').show();
    // $('.form_wrap_1').hide();
    // $( ".progress-bar span" ).animate({width: "29%"}, 1000 );
    // $("#step-button-1").addClass('active');
    
    var isValid = validateForm('form_wrap_1');
    if (!isValid) {
      console.log("invalid form")
        return;
    }
    else{
      $('.form_wrap_2').show();
      $('.form_wrap_1').hide();
      $( ".progress-bar span" ).animate({width: "29%"}, 1000 );
      $("#step-button-1").addClass('active');
    }
  });
  $( "#next_btn_form_2" ).click(function() {
    var isValid = validateForm('form_wrap_2');
    if (!isValid) {
      console.log("invalid form")
        return;
    }
    else{
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').show();
      $( ".progress-bar span" ).animate({width: "50%"}, 1000 );
      $("#step-button-1").addClass('active'); 
      $("#step-button-2").addClass('active'); 
    }


  });
  $( "#next_btn_form_3" ).click(function() {
    var isValid = validateForm('form_wrap_3');
    if (!isValid) {
      console.log("invalid form")
        return;
    }
    else{
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $( ".progress-bar span" ).animate({width: "75%"}, 1000 );
      $("#step-button-3").addClass('active'); 
      $("#step-button-1").addClass('active'); 
      $("#step-button-2").addClass('active'); 
    }
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


  //color picker code
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

      var isSelected = $(this).hasClass('selected');
      if(isSelected) { $('.validation_message').text('') };
    });


    colorBox.append(tickIcon);
    colorBox.append(colorInfo);
    colorBox.append(colorShades);
    $('#colorTheme').append(colorBox);
  });
  // Add a click event handler for the "Select All" checkbox
  $("#selectAllCheckbox").click(function () {
    var isChecked = $(this).prop("checked");

    // Toggle the "selected" class and tick icon for all color boxes
    $(".color-box").toggleClass("selected", isChecked);
    $(".tick-icon").toggle(isChecked);

    // Hide the validation message when "Select All" is checked
    $(".validation_message").text('');
  });
  // ==================logo selection form =====================
  const selectedLogos = [];

  $('.logo_box').on('click', function () {
    const logoId = $(this).find('.logo').data('logo-id');
    const logoAlt = $(this).find('.logo').attr('alt');
    const isSelected = $(this).hasClass('selected');
  
    if (isSelected) {
      // Logo is already selected, remove it from the array
      const index = selectedLogos.findIndex(logo => logo.logoId === logoId);
      if (index !== -1) {
        selectedLogos.splice(index, 1);
      }
    } else {
      // Logo is not selected, add it to the array
      selectedLogos.push({ logoId, logoCategory: $(this).closest('.logo_category').attr('id'), logoAlt });
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

  // Validation for the "Next" button
  $('#next_btn_form_4').on('click', function () {
    const logoValidationMessage = $('#logoValidationMessage');

    if (selectedLogos.length === 0) {
      // No logo selected, display validation message
      logoValidationMessage.text('Please select at least one logo.');
    } else {
      // Clear validation message if at least one logo is selected
      logoValidationMessage.text('');      

      // Log the entire selectedLogos array to the console
      console.log('Selected Logos Array:', selectedLogos);

      // Proceed to the next step or perform any other action
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_5').show();
      $( ".progress-bar span" ).animate({width: "99%"}, 1000 );
      $("#step-button-4").addClass('active'); 
      $("#step-button-3").addClass('active'); 
      $("#step-button-2").addClass('active'); 
      $("#step-button-1").addClass('active'); 
    }
  });
  // ===========================================================

  // Font section form 
  const items = [
    { imagePath: "./images/font_preview/modern.png", description: "modern", subText: "Crisp with an urban flair" },
    { imagePath: "./images/font_preview/handwritten.png", description: "handwritten", subText: "Add a human touch" },
    { imagePath: "./images/font_preview/elegant.png", description: "elegant", subText: "Touch of sophistication" },
    { imagePath: "./images/font_preview/classy.png", description: "classy", subText: "Stand the test of time" },
    { imagePath: "./images/font_preview/vintage.png", description: "vintage", subText: "Add a feel of nostalgia" },
    { imagePath: "./images/font_preview/bold.png", description: "bold", subText: "Leave an impact" },
    { imagePath: "./images/font_preview/quirky.png", description: "quirky", subText: "Add a playful twist" },
    { imagePath: "./images/font_preview/thin.png", description: "thin", subText: "Show the gentle side" },
    { imagePath: "./images/font_preview/bubbly.png", description: "bubbly", subText: "Cheerful and lively" }
    // Add more items as needed
  ];

  const selectedItems = [];

  items.forEach((item, index) => {
    const itemBox = $('<div class="item-box"></div>');
    const itemImage = $(`<img src="${item.imagePath}" alt="${item.description}" class="item-image">`);
    const fontTickIcon = $('<div class="font-tick-icon"></div>');
    const subtext = $('<span class="subtext"></span>').text(item.subText);

    itemBox.append(itemImage);
    itemBox.append(fontTickIcon);
    itemBox.append(subtext);

    // Font box click event handler
    itemBox.on('click', function () {
      itemBox.toggleClass('selected');
      fontTickIcon.toggle();

      const altText = itemBox.find('.item-image').attr('alt');

      if (itemBox.hasClass('selected')) {
        // Clear validation message if at least one item is selected
        $('.form_wrap_5 .validation_message').text('');
        selectedItems.push({ index, altText });
      } else {
        const selectedIndex = selectedItems.findIndex(item => item.index === index);
        if (selectedIndex !== -1) {
          selectedItems.splice(selectedIndex, 1);
        }
      }
      // Log the selected items array to the console
      console.log('Selected Font Items:', selectedItems);
    });
    // Append item box to the container
    $('#itemContainer').append(itemBox);
  });

  $('#itemSelectionForm').on('submit', function (event) {
    event.preventDefault();
    // Perform any additional actions on form submission if needed
  });
  // ==============================
  // ==============================
  // ==============================
  // ==============================

  $('#next_btn_form_5').on('click', function(event){    
    event.preventDefault(); 
    // =============
    const itemValidationMessage = $('.form_wrap_5 .validation_message');

    if (selectedItems.length === 0) {
      // No item selected, display validation message
      itemValidationMessage.text('Please select at least one font style.');
    } else {
      // Clear validation message if at least one item is selected
      itemValidationMessage.text('');

      // Log alt text of item-image inside the selected item-box
      const selectedAltText = [];
      selectedItems.forEach(index => {        
        selectedAltText.push(index.altText);       
      });
      console.log('Selected Item Alt Text:', selectedAltText); 

      // Proceed to the next step or perform any other action
      $("#step-button-5").addClass('active');
      $('.slider').slick('slickNext');
    }
    
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


  // validation code
  // Common validation function
  function validateForm(formWrapClass) {
    var isValid = true;

    // Find all fields with data-mandatory="true" within the specified form wrap
    $('.' + formWrapClass + ' [data-mandatory="true"]').each(function () {
      var field = $(this);
      var fieldValue = field.val();
      var validationMsg = field.data('validation-msg');

      // Find the next .validation_message within the same form wrap
      var validationMessageSpan = field.next('.validation_message');

      // Check if the mandatory field is empty or contains only spaces
      if (!fieldValue || /^\s*$/.test(fieldValue)) {
        isValid = false;

        // Display validation message below the field
        validationMessageSpan.text(validationMsg || 'This field is required.');

        // Add 'error' class to the invalid field
        field.addClass('error');
      } else if (/[@!#$%^&*<>]/.test(fieldValue)) {
        // Check if the field contains restricted special characters
        isValid = false;

        // Display validation message below the field
        validationMessageSpan.text('Special characters like !@#$%^*<> are not allowed.');

        // Add 'error' class to the invalid field
        field.addClass('error');
      } else {
        // Clear validation message and 'error' class if the field is not empty and passes checks
        validationMessageSpan.text('');
        field.removeClass('error');
      }

      // Add focusout event to hide validation message when the user inputs valid data
      field.on('focusout', function () {
        // Use setTimeout to delay execution and ensure fieldValue is properly populated
        setTimeout(function () {
          var fieldValue = field.val();
          if (fieldValue && !/^\s*$/.test(fieldValue)) {
            validationMessageSpan.text('');
            field.removeClass('error');
          }
        }, 10);
      });
    });

    if (formWrapClass === 'form_wrap_3') {
      // Find the color picker within the specified form wrap
      var colorPicker = $('.' + formWrapClass + ' .color-picker');

      // Check if at least one color is selected
      if (colorPicker.find('.color-box.selected').length === 0) {
        isValid = false;

        // Display validation message below the color picker
        colorPicker.next('.validation_message').text('Please select at least one color.');

        // Add 'error' class to the invalid field
        // colorPicker.addClass('error');
      } else {
        // Clear validation message and 'error' class if at least one color is selected
        colorPicker.next('.validation_message').text('');
        // colorPicker.removeClass('error');
      }
    }

    return isValid;
  }

// ===============================
// ===============================
// ===============================


  