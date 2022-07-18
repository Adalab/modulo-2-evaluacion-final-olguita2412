/* eslint-disable no-undef */
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

