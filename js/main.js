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

    


// stepper //
    const nextSectionButtons = $('.next-button');
    const previousSectionButtons = $('.prev-button');
    const form = $('#form');
    let stepOffset = 0;
  
    function addStepButtonClickListeners(numberOfStepButtons) {
      for (let i = 0; i < numberOfStepButtons; i++) {
        let stepButton = $(`#step-button-${i + 1}`);
        stepButton.on('click', (e) => handleStepButtonclick(e, i));
      }
    }
  
    addStepButtonClickListeners(4);
  
    form.on('submit', handleFormSubmit);
  
    nextSectionButtons.on('click', nextStepInForm);
  
    previousSectionButtons.on('click', previousStepInForm);
  
    function nextStepInForm(e) {
      e.preventDefault();
  
      stepOffset++;
      updateTranslateMultiplier();
    }
  
    function previousStepInForm(e) {
      e.preventDefault();
  
      stepOffset--;
      updateTranslateMultiplier();
    }
  
    function handleStepButtonclick(e, stepNumber) {
      e.preventDefault();
  
      stepOffset = stepNumber;
      updateTranslateMultiplier();
    }
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      alert('Thanks for placing an order!');
  
      location.reload();
    }
  
    function updateTranslateMultiplier() {
      $('html').css('--translate-multiplier', stepOffset);
    }
  });