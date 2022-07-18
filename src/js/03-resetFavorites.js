/* eslint-disable no-undef */
'use strict';

// FUNCIÓN PARA RESETEAR FAVORITES

const resetFavorites = (html) => {
  if (html !== ''){
    btnResetFavorites.classList.remove('hidden');
  } else {
    btnResetFavorites.classList.add('hidden');
  }
};


// FUNCIÓN HANDLE PARA EL BOTÓN RESET FAVORITES

const handleResetFavorites = () => {
  favorites = [];
  let html= '';
  renderSeriesFavorites();
  localStorage.clear('favorites');
  resetFavorites(html);

};


// LISTENER PARA EL BOTÓN RESET FAVORITES

btnResetFavorites.addEventListener('click', handleResetFavorites);
