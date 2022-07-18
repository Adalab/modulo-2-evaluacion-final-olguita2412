/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';

// FUNCIÓN PARA OBTENER DATOS DE LA API

const getDataAPI = (inputValue) => {
  if (inputValue !== '') {
    fetch (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
      .then((response) => response.json())
      .then ((data) => {
        series = data.data;
        renderSeriesSearch();

      });
  } else {
    let html = '';
    listSearch.innerHTML = html;
  }
};