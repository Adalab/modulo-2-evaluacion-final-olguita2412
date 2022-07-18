/* eslint-disable no-extra-semi */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
'use strict';


// FUNCIÓN RENDER GLOBAL

const renderSeries = (arraySeries) => {
  let html = '';
  let classFavorite = '';
  for (const oneSerie of arraySeries) {
    const favoritesFoundIndex = favorites.findIndex((fav) => fav.mal_id === oneSerie.mal_id);
    if (favoritesFoundIndex !== -1){
      classFavorite = '--favorite';
    } else {
      classFavorite = '--search';
    }
    html += `<li class="js-serie serie serie${classFavorite}" id="${oneSerie.mal_id}">`;
    html += `<h2 class="serie__title">${oneSerie.title}</h2>`;
    if (oneSerie.images.jpg.image_url === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'){
      oneSerie.images.jpg.image_url === 'https://via.placeholder.com/200/a52a2a/ffffff/?text=not+image+found';
      html += `<img class="serie__img" src="${oneSerie.images.jpg.image_url}" />`;
    } else {
      html += `<img class="serie__img" src="${oneSerie.images.jpg.image_url}" />`;
    }
    html += `<div class="serie__button--container"><button class="serie__button"><i class="fa-solid fa-heart-circle-plus serie__button--icon-plus fa-2x"></i></button>`;
    html += `<button class="serie__button"><i class="fa-solid fa-heart-circle-xmark serie__button--icon-remove fa-2x"></i></button>`;
    html += `<button class="serie__button"><i class="fa-solid fa-heart serie__button--icon fa-2x"></i></button></div>`;
    html += `</li>`;
  }
  return html;
};


// FUNCIÓN HANDLE DEL LISTENER DE CADA LI

const handleClick = (event) => {

  const idSelected = parseInt(event.currentTarget.id);
  const serieFound = series.find((oneSerie) => oneSerie.mal_id === idSelected);
  const favoriteFound = favorites.findIndex((fav) => fav.mal_id === idSelected);

  if (favoriteFound === -1){
    favorites.push(serieFound);
  } else {
    favorites.splice(favoriteFound, 1);
  }

  renderSeriesFavorites();
};


// LISTENER DE CADA LI

function listenerSerie() {
  const liSeries = document.querySelectorAll('.js-serie');
  for (const li of liSeries) {
    li.addEventListener('click', handleClick);
  }
};

// FUNCIÓN RENDER ESPECÍFICA DE SEARCH

const renderSeriesSearch = () => {
  let html= renderSeries(series);
  listSearch.innerHTML = html;
  listenerSerie();
};


// FUNCIÓN RENDER ESPECÍFICA DE FAVORITES

const renderSeriesFavorites = () => {
  let html = renderSeries(favorites);
  listFavorites.innerHTML = html;
  resetFavorites(html);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  renderSeriesSearch();
};

// FUNCIÓN PARA CARGAR DATOS DE FAVORITES AL INICIAR LA PÁGINA

function onLoad() {
  if (dataLS !== null) {
    favorites = dataLS;
    renderSeriesFavorites();
  } else {
    listFavorites.innerHTML = '';
  }
}

onLoad();