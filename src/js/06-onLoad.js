/* eslint-disable no-undef */
'use strict';

function onLoad() {
  if (dataLS !== null) {
    favorites = dataLS;
    renderSeriesFavorites();
  } else {
    listFavorites.innerHTML = '';
  }
}

onLoad();