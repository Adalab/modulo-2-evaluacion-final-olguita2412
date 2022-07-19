/* eslint-disable no-unused-vars */
'use strict';

// ELEMENTOS DEL HTML

const inputSearch = document.querySelector('.js-input');
const btnSearch = document.querySelector('.js-btn-search');
const btnReset = document.querySelector('.js-btn-reset');
const listSearch = document.querySelector('.js-list-search');
const listFavourites = document.querySelector('.js-list-favourites');
const btnResetFavourites = document.querySelector('.js-btn-reset-favourites');

// VARIABLES GLOBALES

let series = [];
let favourites = [];
const dataLS = JSON.parse(localStorage.getItem('favourites'));


