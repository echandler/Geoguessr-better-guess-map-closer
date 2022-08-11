// ==UserScript==
// @name         Geoguess better map closer.
// @namespace    geoguessr user scripts
// @version      1.0
// @description  Better map closer.
// @author       echandler
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @updateURL    https://github.com/echandler/Geoguessr-better-guess-map-closer/raw/main/GeoguessrBetterGuessMapCloser.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let int = setInterval(()=>{
        let cs = document.body.querySelectorAll('canvas');

        if (!cs.length) return;

        clearInterval(int);

        cs.forEach((canvas)=>{
           canvas.addEventListener('mousedown', function(e){
               document.querySelector('.guess-map').classList.remove('guess-map--active');
            });
        });

    }, 1000);
})();
