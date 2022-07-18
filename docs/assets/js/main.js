"use strict";const inputSearch=document.querySelector(".js-input"),btnSearch=document.querySelector(".js-btn-search"),btnReset=document.querySelector(".js-btn-reset"),listSearch=document.querySelector(".js-list-search"),listFavorites=document.querySelector(".js-list-favorites"),btnResetFavorites=document.querySelector(".js-btn-reset-favorites");let series=[],favorites=[];const dataLS=JSON.parse(localStorage.getItem("favorites")),getDataAPI=e=>{if(""!==e)fetch("https://api.jikan.moe/v4/anime?q="+e).then(e=>e.json()).then(e=>{series=e.data,renderSeriesSearch()});else{let e="";listSearch.innerHTML=e}},resetFavorites=e=>{""!==e?btnResetFavorites.classList.remove("hidden"):btnResetFavorites.classList.add("hidden")},handleResetFavorites=()=>{listFavorites.innerHTML="",localStorage.clear("favorites"),resetFavorites("")};btnResetFavorites.addEventListener("click",handleResetFavorites);const renderSeries=e=>{let t="",s="";for(const r of e){s=-1!==favorites.findIndex(e=>e.mal_id===r.mal_id)?"--favorite":"--search",t+=`<li class="js-serie serie serie${s}" id="${r.mal_id}">`,t+=`<h2 class="serie__title">${r.title}</h2>`,"https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png"===r.images.jpg.image_url?(r.images.jpg.image_url="https://via.placeholder.com/210x295/ffffff/666666/?text=TV",t+=`<img class="serie__img" src="${r.images.jpg.image_url}" />`):t+=`<img class="serie__img" src="${r.images.jpg.image_url}" />`,t+='<div class="serie__button--container"><button class="serie__button"><i class="fa-solid fa-heart-circle-plus serie__button--icon-plus fa-2x"></i></button>',t+='<button class="serie__button"><i class="fa-solid fa-heart-circle-xmark serie__button--icon-remove fa-2x"></i></button>',t+='<button class="serie__button"><i class="fa-solid fa-heart serie__button--icon fa-2x"></i></button></div>',t+="</li>"}return t},handleClick=e=>{const t=parseInt(e.currentTarget.id),s=series.find(e=>e.mal_id===t),r=favorites.findIndex(e=>e.mal_id===t);-1===r?favorites.push(s):favorites.splice(r,1),renderSeriesFavorites()};function listenerSerie(){const e=document.querySelectorAll(".js-serie");for(const t of e)t.addEventListener("click",handleClick)}const renderSeriesSearch=()=>{let e=renderSeries(series);listSearch.innerHTML=e,listenerSerie()},renderSeriesFavorites=()=>{let e=renderSeries(favorites);listFavorites.innerHTML=e,resetFavorites(e),localStorage.setItem("favorites",JSON.stringify(favorites)),renderSeriesSearch()};function onLoad(){null!==dataLS?(favorites=dataLS,renderSeriesFavorites()):listFavorites.innerHTML=""}onLoad();const handleReset=()=>{let e=inputSearch.value;e="",getDataAPI("")};btnReset.addEventListener("click",handleReset);const handleSearch=e=>{e.preventDefault();const t=inputSearch.value.toLowerCase();getDataAPI(t)};btnSearch.addEventListener("click",handleSearch),inputSearch.addEventListener("keyup",handleSearch);