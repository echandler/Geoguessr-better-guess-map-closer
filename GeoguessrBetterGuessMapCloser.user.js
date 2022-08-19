// ==UserScript==
// @name         Geoguess better map closer.
// @namespace    geoguessr user scripts
// @version      3.0
// @description  Better map closer.
// @author       echandler
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @downloadURL  https://github.com/echandler/Geoguessr-better-guess-map-closer/raw/main/GeoguessrBetterGuessMapCloser.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(function(){
       const guessmap = document.querySelector('.guess-map');
       const canvas = document.querySelector("canvas");
       
       if (guessmap && !guessmap._n) {
            // Sometimes the guess map doesn't open back up.
           
            guessmap.addEventListener("mouseover", function(e){
                guessmap.classList.add("guess-map--active");
            });
            guessmap._n = true;
       }
       if (canvas && !canvas._n) {
           canvas.addEventListener('mousedown', function(){
              const guessmap = document.querySelector('.guess-map');
              guessmap.classList.remove("guess-map--active");
           });
           canvas._n = true;
       }
   }, 2000);
})();
