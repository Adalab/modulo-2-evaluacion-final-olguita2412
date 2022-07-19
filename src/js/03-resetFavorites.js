/* eslint-disable no-undef */
'use strict';

// FUNCIÓN PARA RESETEAR favourites

const resetFavourites = (html) => {
  if (html !== ''){
    btnResetFavourites.classList.remove('hidden');
  } else {
    btnResetFavourites.classList.add('hidden');
  }
};


// FUNCIÓN HANDLE PARA EL BOTÓN RESET favourites

const handleResetFavourites = () => {
  favourites = [];
  let html= '';
  renderSeriesFavourites();
  localStorage.clear('favourites');
  resetFavourites(html);
  let inputValue = inputSearch.value;
  getDataAPI(inputValue);

};


// LISTENER PARA EL BOTÓN RESET favourites

btnResetFavourites.addEventListener('click', handleResetFavourites);
