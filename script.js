'use strict';

// Select elements for leistungen section
const leistungenMehr = document.querySelector('.leistungen-mehr');
const leistungenWeniger = document.querySelector('.leistungen-weniger');
const leistungenTxt = document.querySelector('.leistungen');

// Select elements for hotelbeschreibung section
const hotelbeschreibungMehr = document.querySelector('.hotelbeschreibung-mehr');
const hotelbeschreibungWeniger = document.querySelector('.hotelbeschreibung-weniger');
const hotelsTxt = document.querySelector('.hotels');

// Select elements for hinweise section
const hinweiseMehr = document.querySelector('.hinweise-mehr');
const hinweiseWeniger = document.querySelector('.hinweise-weniger');
const hinweiseTxt = document.querySelector('.hinweise');

// Toggle function for leistungen section
function leistungen() {
  leistungenMehr.toggleAttribute('hidden');
  leistungenWeniger.toggleAttribute('hidden');
  leistungenTxt.toggleAttribute('hidden');
}

// Toggle function for hotelbeschreibung section
function hotelbeschreibung() {
  hotelbeschreibungMehr.toggleAttribute('hidden');
  hotelbeschreibungWeniger.toggleAttribute('hidden');
  hotelsTxt.toggleAttribute('hidden');
}

// Toggle function for hinweise section
function hinweise() {
  hinweiseMehr.toggleAttribute('hidden');
  hinweiseWeniger.toggleAttribute('hidden');
  hinweiseTxt.toggleAttribute('hidden');
}

// Add event listeners for leistungen section
leistungenMehr.addEventListener('click', leistungen);
leistungenWeniger.addEventListener('click', leistungen);
leistungenTxt.addEventListener('click', leistungen);

// Add event listeners for hotelbeschreibung section
hotelbeschreibungMehr.addEventListener('click', hotelbeschreibung);
hotelbeschreibungWeniger.addEventListener('click', hotelbeschreibung);
hotelsTxt.addEventListener('click', hotelbeschreibung);

// Add event listeners for hinweise section
hinweiseMehr.addEventListener('click', hinweise);
hinweiseWeniger.addEventListener('click', hinweise);
hinweiseTxt.addEventListener('click', hinweise);

// Initial setup to ensure one is shown and the other is hidden
function initialSetup(showElement, hideElement, textElement) {
  if (!showElement.hasAttribute('hidden') && !hideElement.hasAttribute('hidden')) {
    showElement.setAttribute('hidden', true);
  }
  if (!textElement.hasAttribute('hidden')) {
    textElement.setAttribute('hidden', true);
  }
}

initialSetup(leistungenMehr, leistungenWeniger, leistungenTxt);
initialSetup(hotelbeschreibungMehr, hotelbeschreibungWeniger, hotelsTxt);
initialSetup(hinweiseMehr, hinweiseWeniger, hinweiseTxt);
