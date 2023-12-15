const nextSectionButtons = document.querySelectorAll('.next-button');
const previousSectionButtons = document.querySelectorAll('.prev-button');
const form = document.getElementById('form');
let stepOffset = 0;

function addStepButtonClickListeners(numberOfStepButtons) {
  for (let i = 0; i < numberOfStepButtons; i++) {
    stepButton = document.getElementById(`step-button-${i + 1}`);
    stepButton.addEventListener('click', (e) => handleStepButtonclick(e, i));
  }
}

addStepButtonClickListeners(4);

form.addEventListener('submit', handleFormSubmit);

for (let button of nextSectionButtons) {
  button.addEventListener('click', nextStepInForm);
}

for (let button of previousSectionButtons) {
  button.addEventListener('click', previousStepInForm);
}

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
  document.documentElement.style.setProperty('--translate-multiplier', stepOffset);
}