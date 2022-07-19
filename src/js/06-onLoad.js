/* eslint-disable no-undef */
'use strict';

function onLoad() {
  if (dataLS !== null) {
    favourites = dataLS;
    renderSeriesFavourites();
  } else {
    listfavourites.innerHTML = '';
  }
}

onLoad();