/* eslint-disable no-extra-semi */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
'use strict';


// FUNCIÓN RENDER ESPECÍFICA DE SEARCH

const renderSeriesSearch = () => {
  let html = '';
  let classFavourite = '';
  for (const oneSerie of series) {
    const favouritesFoundIndex = favourites.findIndex((fav) => fav.mal_id === oneSerie.mal_id);
    if (favouritesFoundIndex !== -1){
      classFavourite = '--favourite';
    } else {
      classFavourite = '--search';
    }
    html += `<li class="js-serie serie serie${classFavourite}" id="${oneSerie.mal_id}">`;
    html += `<h2 class="serie__title">${oneSerie.title}</h2>`;
    if (oneSerie.images.jpg.image_url === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'){
      // eslint-disable-next-line camelcase
      oneSerie.images.jpg.image_url = 'https://via.placeholder.com/200/a52a2a/ffffff/?text=NOT+IMAGE';
      html += `<img class="serie__img" src="${oneSerie.images.jpg.image_url}" />`;
    } else {
      html += `<img class="serie__img" src="${oneSerie.images.jpg.image_url}" />`;
    }
    html += `<div class="serie__button--container"><button class="serie__button"><i class="fa-solid fa-heart-circle-plus serie__button--icon-plus fa-lg"></i></button>`;
    html += `<button class="serie__button"><i class="fa-solid fa-heart-circle-xmark serie__button--icon-remove fa-lg"></i></button>`;
    html += `<button class="serie__button"><i class="fa-solid fa-heart serie__button--icon fa-lg"></i></button></div>`;
    html += `</li>`;
  }
  listSearch.innerHTML = html;
  listenerSerie();
};

// FUNCIÓN RENDER ESPECÍFICA DE FAVOURITES

const renderSeriesFavourites = () => {
  let html = '';
  for (const oneSerie of favourites) {
    html += `<li class="js-serie favourite" id="${oneSerie.mal_id}">`;
    html += `<h2 class="favourite__title">${oneSerie.title}</h2>`;
    if (oneSerie.images.jpg.image_url === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
      // eslint-disable-next-line camelcase
      oneSerie.images.jpg.image_url = 'https://via.placeholder.com/200/a52a2a/ffffff/?text=NOT+IMAGE';
      html += `<img class="favourite__img" src="${oneSerie.images.jpg.image_url}" />`;
    } else {
      html += `<img class="favourite__img" src="${oneSerie.images.jpg.image_url}" />`;
    }
    html += `<div class="favourite__button--container">`;
    html += `<button class="favourite__button"><i class="fa-solid fa-heart-circle-xmark favourite__button--icon-remove fa-lg"></i></button>`;
    html += `<button class="favourite__button"><i class="fa-solid fa-heart favourite__button--icon fa-lg"></i></button></div>`;
    html += `</li>`;
  }
  listFavourites.innerHTML = html;
  resetFavourites(html);
  localStorage.setItem('favourites', JSON.stringify(favourites));
  renderSeriesSearch();
};

// FUNCIÓN HANDLE DEL LISTENER DE CADA LI

const handleClick = (event) => {

  const idSelected = parseInt(event.currentTarget.id);
  const serieFound = series.find((oneSerie) => oneSerie.mal_id === idSelected);
  const favouriteFound = favourites.findIndex((fav) => fav.mal_id === idSelected);

  if (favouriteFound === -1){
    favourites.push(serieFound);
  } else {
    favourites.splice(favouriteFound, 1);
  }

  renderSeriesFavourites();
};


// LISTENER DE CADA LI

function listenerSerie() {
  const liSeries = document.querySelectorAll('.js-serie');
  for (const li of liSeries) {
    li.addEventListener('click', handleClick);
  }
};


