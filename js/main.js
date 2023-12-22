$(document).ready(function() {

  loadFormData();


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


  // step button code
  $( "#step-button-1" ).click(function() {

    // Check if all previous forms are valid
    if (arePreviousFormsValid(1)) {
      // Your existing code for step 1
      // Call the validateForm function for the current step
      let isValid = validateForm('form_wrap_1');
      // Check if the form is valid
      if (isValid) {
        // storeFormData('step1_form');
        // Your code here if the form is valid
        console.log('Step 1 form is valid. Proceed with your code.');

        $( ".progress-bar span" ).animate({width: "0%"}, 1000 );
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

        $('.form_wrap_2').show();
        $('.form_wrap_1').hide();
        $( ".progress-bar span" ).animate({width: "29%"}, 1000 );
        $("#step-button-1").addClass('active');


      } else {
        // Your code here if the form is not valid
        console.log('Step 1 form is not valid. Please check the validation messages.');
        return;
      }

    } else {
      console.log('Previous forms are not valid. Please check the validation messages.');
    }

    
      
  });
  $( "#step-button-2" ).click(function() {
    // Call the validateForm function for the current step
    let isValid = validateForm('form_wrap_2');
    // Check if the form is valid
    if (isValid) {
      // storeFormData('step2_form');
      // Your code here if the form is valid
      console.log('Step 2 form is valid. Proceed with your code.');

      $( ".progress-bar span" ).animate({width: "29%"}, 1000 );
      $("#step-button-1").addClass('active'); 
      $("#step-button-3").removeClass('active'); 
      $("#step-button-4").removeClass('active'); 
      $("#step-button-2").removeClass('active')
      $('.form_wrap_5').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_2').show();


      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').show();
      $( ".progress-bar span" ).animate({width: "50%"}, 1000 );
      $("#step-button-1").addClass('active'); 
      $("#step-button-2").addClass('active'); 
      
    }
    else{
      console.log("form 2 is invalid!")
    }
  });
  $( "#step-button-3" ).click(function() {
    // Call the validateForm function for the current step
    let isValid = validateForm('form_wrap_3');
    // Check if the form is valid
    if (isValid) {
      $('.color-picker').removeClass('error');
      storeFormData('step3_form');
      // Your code here if the form is valid
      console.log('Step 3 form is valid. Proceed with your code.');

      $( ".progress-bar span" ).animate({width: "50%"}, 1000 );
      $("#step-button-1").addClass('active'); 
      $("#step-button-4").removeClass('active');
      $("#step-button-3").removeClass('active'); 
      $("#step-button-2").addClass('active'); 
      $('.form_wrap_5').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').show();


      $('.form_wrap_2').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_4').show();
      $( ".progress-bar span" ).animate({width: "75%"}, 1000 );
      $("#step-button-3").addClass('active'); 
      $("#step-button-1").addClass('active'); 
      $("#step-button-2").addClass('active'); 

    }
    else{
      $('.color-picker').addClass('error');
      console.log("form 3 is invalid!")
    }
  });
  $( "#step-button-4" ).click(function() {    
      let logoValidationMessage = $('#logoValidationMessage');
      if (selectedLogos.length === 0) {
        $('.logo_category_wrap').addClass('error');
        // No logo selected, display validation message
        logoValidationMessage.text('Please select at least one logo.');
      } 
      else {        

        $('.logo_category_wrap').removeClass('error');
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
  $( "#step-button-5" ).click(function() {
    console.log("selectedLogos.length====>",selectedLogos.length)
    // Call the validateForm function for the current step
    let isValid1 = validateForm('form_wrap_1');
    let isValid2 = validateForm('form_wrap_2');
    let isValid3 = validateForm('form_wrap_3');
    let itemValidationMessage = $('.form_wrap_5 .validation_message');
    // Check if the form is valid
    if ((selectedLogos.length > 0) && (isValid3 && isValid2 && isValid1)) {
      // Your code here if the form is valid
      console.log('Step 5 form is valid. Proceed with your code.');

      $( ".progress-bar span" ).animate({width: "99%"}, 1000 );
      $("#step-button-1").addClass('active'); 
      $("#step-button-2").addClass('active'); 
      $("#step-button-3").addClass('active'); 
      $("#step-button-4").addClass('active'); 
      $('.form_wrap_2').hide();
      $('.form_wrap_4').hide();
      $('.form_wrap_3').hide();
      $('.form_wrap_1').hide();
      $('.form_wrap_5').show();


      

      if (selectedItems.length === 0) {
        $('#itemSelectionForm').addClass('error');
        // No item selected, display validation message
        itemValidationMessage.text('Please select at least one font style.');
      } else {
        $('#itemSelectionForm').removeClass('error');
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

      }
      else{
        console.log("form 5 is invalid!")
      }
    
  });
// ============================================
// ============================================



  $('.form_wrap_2').hide();
  $('.form_wrap_3').hide();
  $('.form_wrap_4').hide();
  $('.form_wrap_5').hide();

  $( "#next_btn_form_1" ).click(function() {    

    // Check if all previous forms are valid
    if (arePreviousFormsValid(2)) {
      // Your existing code for moving to the next form
      let isValid = validateForm('form_wrap_1');
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
    } else {
      console.log('Previous forms are not valid. Please check the validation messages.');
    }
    
  });
  $( "#next_btn_form_2" ).click(function() {
    let isValid = validateForm('form_wrap_2');
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
    let isValid = validateForm('form_wrap_3');
    if (!isValid) {
      $('.color-picker').addClass('error');
      console.log("invalid form")
        return;
    }
    else{
      $('.color-picker').addClass('error');
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
    $( ".progress-bar span" ).animate({width: "75%"}, 1000 );
    $("#step-button-5").removeClass('active'); 
    $("#step-button-4").removeClass('active');
  });
  $( "#prev_btn_4" ).click(function() {
    $('.form_wrap_2').hide();
    $('.form_wrap_1').hide();
    $('.form_wrap_4').hide();
    $('.form_wrap_3').show();
    $('.form_wrap_5').hide();
    $( ".progress-bar span" ).animate({width: "50%"}, 1000 );
    $("#step-button-3").removeClass('active'); 
  });
  $( "#prev_btn_3" ).click(function() {
    $('.form_wrap_3').hide();
    $('.form_wrap_1').hide();
    $('.form_wrap_4').hide();
    $('.form_wrap_2').show();
    $('.form_wrap_5').hide();
    $( ".progress-bar span" ).animate({width: "28%"}, 1000 );
    $("#step-button-2").removeClass('active');
  });
  $( "#prev_btn_2" ).click(function() {
    $('.form_wrap_3').hide();
    $('.form_wrap_2').hide();
    $('.form_wrap_4').hide();
    $('.form_wrap_1').show();
    $('.form_wrap_5').hide();
    $( ".progress-bar span" ).animate({width: "0%"}, 1000 );
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
      if(isSelected) { 
        $('.validation_message').text('');
        $('.color-picker').removeClass('error'); 
      };
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
      $('.logo_category_wrap').removeClass('error');
      $('#logoSelectionForm .validation_message').text('');
      // Logo is already selected, remove it from the array
      const index = selectedLogos.findIndex(logo => logo.logoId === logoId);
      if (index !== -1) {
        selectedLogos.splice(index, 1);
      }
    } else {
      $('.logo_category_wrap').removeClass('error');
      $('#logoSelectionForm .validation_message').text('');
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
      $('.logo_category_wrap').addClass('error');
      // No logo selected, display validation message
      logoValidationMessage.text('Please select at least one logo.');
    } else {
      $('.logo_category_wrap').removeClass('error');
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
        $('#itemSelectionForm').removeClass('error');
        // Clear validation message if at least one item is selected
        $('.form_wrap_5 .validation_message').text('');
        selectedItems.push({ index, altText });
      } else {
        $('#itemSelectionForm').addClass('error');
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
      $('#itemSelectionForm').addClass('error');
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
    whitelist: [
        {"id": 1, "value": "some string"}
    ],
    placeholder: 'Lines ,shapes, hope, intelligence, etc.' 
  })
    .on('add', function(e, tagName) {
        console.log('JQEURY EVENT: ', 'added', tagName);
    })
    .on("invalid", function(e, tagName) {
        console.log('JQEURY EVENT:', "invalid", e, ' ', tagName);
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
// ENDOF document ready


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


  

// Function to serialize form data
function serializeFormData(formWrapClass) {
  var formData = {};

  // Serialize form fields using serializeArray
  $('.' + formWrapClass + ' :input').each(function () {
    var field = $(this);
    formData[field.attr('name')] = field.val();
  });

  // Add information about the active form
  formData['activeForm'] = formWrapClass;

  return formData;
}

// Function to store form data in local storage
function storeFormData(formWrapClass) {
  var formData = serializeFormData(formWrapClass);
  console.log("formData --> ",formData)
  localStorage.setItem('formData', JSON.stringify(formData));
}

// Validation function to check if all previous forms are valid
function arePreviousFormsValid(currentFormIndex) {
  for (let i = 1; i < currentFormIndex; i++) {
    let formWrapClass = 'form_wrap_' + i;
    if (!validateForm(formWrapClass)) {
      console.log('Form ' + i + ' is not valid.');
      return false;
    }
  }
  return true;
}


// Function to load form data from local storage
function loadFormData() {
  var storedData = localStorage.getItem('formData');
  if (storedData) {
    var formData = JSON.parse(storedData);

    // Populate forms with stored data
    $('.' + formData.activeForm + ' :input').each(function () {
      var field = $(this);
      var fieldName = field.attr('name');
      if (formData[fieldName] !== undefined) {
        field.val(formData[fieldName]);
      }
    });
  }
}