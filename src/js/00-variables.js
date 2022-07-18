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


