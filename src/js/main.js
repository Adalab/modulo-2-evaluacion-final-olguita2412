'use strict';

// ELEMENTOS DEL HTML

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const btnReset = document.querySelector('.js-btn-reset');
const listSearch = document.querySelector('.js-list-search');
const listFavorites = document.querySelector('.js-list-favorites');

// VARIABLES GLOBALES

let series = [];
let favorites = [];

// FUNCIONES

const renderSeries = (arraySeries) => {
    let html = '';
    

    for (const oneSerie of arraySeries) {

        html += `<li class="js-serie" id="${oneSerie.mal_id}">`;
        html += `<h2>${oneSerie.title}</h2>`;
        if (oneSerie.images.jpg.image_url === "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"){
            oneSerie.images.jpg.image_url = "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
            html += `<img src="${oneSerie.images.jpg.image_url}" />`;
        } else {
        html += `<img src="${oneSerie.images.jpg.image_url}" />`;
         }
        html += `</li>`;
    }
    return html;
};

 const renderSeriesSearch = () => {
    let html= renderSeries(series);
    listSearch.innerHTML = html;
    listenerSerie()
 }

 const renderSeriesFavorites = () => { 
    let html = renderSeries(favorites);
    listFavorites.innerHTML = html;
    listenerSerie();
    console.log(favorites);
    localStorage.setItem('favorites', JSON.stringify(favorites));
 }


const handleSearch = (event) => {
    event.preventDefault();
    const inputValue = inputSearch.value.toLowerCase();
    getDataAPI(inputValue);
}

btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keyup', handleSearch);

const getDataAPI = (inputValue) => {
    fetch (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
        .then((response) => response.json())
        .then ((data) => {
            series = data.data;
            renderSeriesSearch();
            
    })
}

const handleClick = (event) => {
    const idSelected = parseInt(event.currentTarget.id);
    const serieFound = series.find((oneSerie) => oneSerie.mal_id === idSelected);
   
    const favoriteFound = favorites.findIndex((fav) => fav.mal_id === idSelected);

    favorites = dataLS;
   
    if (favoriteFound === -1){
        favorites.push(serieFound);
    } else {
        favorites.splice(favoriteFound, 1);
    }
    renderSeriesFavorites();
    
}

function listenerSerie() {
    const liSeries = document.querySelectorAll('.js-serie');
    for (const li of liSeries) {
        li.addEventListener('click', handleClick);
    }
}

const dataLS = JSON.parse(localStorage.getItem('favorites'));

function onLoad() {
    
    if (dataLS !== '') {
        let html = renderSeries(dataLS);
        listFavorites.innerHTML = html;
    } else {
        listFavorites.innerHTML = '';
    }
    
}

onLoad();