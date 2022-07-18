'use strict';

// ELEMENTOS DEL HTML

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const btnReset = document.querySelector('.js-btn-reset');
const listSearch = document.querySelector('.js-list-search');
const listFavorites = document.querySelector('.js-list-favorites');
const btnResetFavorites = document.querySelector('.js-btn-reset-favorites');

// VARIABLES GLOBALES

let series = [];
let favorites = [];
const dataLS = JSON.parse(localStorage.getItem('favorites'));



'use strict';

// FUNCIÓN PARA OBTENER DATOS DE LA API

const getDataAPI = (inputValue) => {
    if (inputValue !== '') {
    fetch (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
        .then((response) => response.json())
        .then ((data) => {
            series = data.data;
            renderSeriesSearch();
            
    })
    } else {
        let html = '';
        listSearch.innerHTML = html;
    }
};
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
    let html = '';
    listFavorites.innerHTML = html;
    localStorage.clear('favorites');
    resetFavorites(html);
};


// LISTENER PARA EL BOTÓN RESET FAVORITES

btnResetFavorites.addEventListener('click', handleResetFavorites);

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
        if (oneSerie.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"){
            oneSerie.images.jpg.image_url = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
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
    listenerSerie()
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
};

onLoad();
'use strict';

// FUNCIÓN PARA RESETEAR EL INPUT Y LA BÚSQUEDA

const handleReset = () => {
    let inputValue = inputSearch.value;
    inputValue = '';
    getDataAPI(inputValue);
};

btnReset.addEventListener('click', handleReset);
'use strict';

// FUNCIÓN HANDLE PARA BUSCAR

const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = inputSearch.value.toLowerCase();
    getDataAPI(inputValue);
};


// LISTENER PARA BOTÓN BUSCAR Y PARA EL EVENTO DE KEYUP

btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keyup', handleSearch);


//# sourceMappingURL=main.js.map
