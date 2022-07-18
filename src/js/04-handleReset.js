/* eslint-disable no-undef */
'use strict';

// FUNCIÓN PARA RESETEAR EL INPUT Y LA BÚSQUEDA

const handleReset = () => {
  let inputValue = inputSearch.value;
  inputValue = '';
  getDataAPI(inputValue);
};

btnReset.addEventListener('click', handleReset);