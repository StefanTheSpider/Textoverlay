'use strict'

const leistungenBtn = document.querySelector(`.li-1`);
const hotelBtn = document.querySelector(`.li-2`);
const hinweiseBtn = document.querySelector(`.li-3`);

const leistungen = document.querySelector(`.leistungen`);
const hotel = document.querySelector(`.hotels`);
const hinweise = document.querySelector(`.hinweise`);

const overlapL = function () {
  leistungenBtn.classList.add(`textDecoration`);
  leistungenBtn.classList.add(`activ`);
  leistungen.classList.remove(`hidden`);
  hotel.classList.add(`hidden`);
  hotelBtn.classList.remove(`hidden`);
  hotelBtn.classList.remove(`activ`);
  hotelBtn.classList.remove(`textDecoration`);
  hinweise.classList.add(`hidden`);
  hinweiseBtn.classList.remove(`hidden`);
  hinweiseBtn.classList.remove(`activ`);
  hinweiseBtn.classList.remove(`textDecoration`);
}

const overlapHotel = function () {
  leistungen.classList.add(`hidden`);
  leistungenBtn.classList.remove(`textDecoration`);
  leistungenBtn.classList.remove(`activ`);
  hotelBtn.classList.add(`textDecoration`);
  hotelBtn.classList.add(`activ`);
  hotel.classList.remove(`hidden`);
  hinweiseBtn.classList.remove(`textDecoration`);
  hinweiseBtn.classList.remove(`activ`);
  hinweise.classList.remove(`index`);
  hinweise.classList.add(`hidden`);
}

const overlapH = function () {
  leistungen.classList.add(`hidden`);
  leistungenBtn.classList.remove(`textDecoration`);
  leistungenBtn.classList.remove(`activ`);
  hotel.classList.remove(`index`);
  hotel.classList.add(`hidden`);
  hotelBtn.classList.remove(`textDecoration`);
  hotelBtn.classList.remove(`activ`);
  hinweise.classList.add(`index`);
  hinweiseBtn.classList.add(`textDecoration`);
  hinweiseBtn.classList.add(`activ`);
  hinweise.classList.remove(`hidden`);
}

leistungenBtn.addEventListener(`click`, overlapL);
hinweiseBtn.addEventListener(`click`, overlapH);
hotelBtn.addEventListener(`click`, overlapHotel);




