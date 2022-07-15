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
        html += `<li class="" id="${oneSerie.mal_id}">`;
        html += `<h2>${oneSerie.title}</h2>`;
        html += `<img src="${oneSerie.images.jpg.image_url}" />`;
        html += `</li>`;

    }
    listSearch.innerHTML = html;
}



const handleSearch = (event) => {
    event.preventDefault();

    const inputValue = inputSearch.value.toLowerCase();

    fetch (`https://api.jikan.moe/v4/anime?q=${inputValue}`)
        .then((response) => response.json())
        .then ((data) => {
            series = data.data;
            renderSeries(series);
        })
}

btnSearch.addEventListener('click', handleSearch);
inputSearch.addEventListener('keyup', handleSearch);
//# sourceMappingURL=main.js.map
