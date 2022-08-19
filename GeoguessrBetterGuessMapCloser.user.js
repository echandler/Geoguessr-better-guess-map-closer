// ==UserScript==
// @name         Geoguess better map closer.
// @namespace    geoguessr user scripts
// @version      1.2
// @description  Better map closer.
// @author       echandler
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @downloadURL  https://github.com/echandler/Geoguessr-better-guess-map-closer/raw/main/GeoguessrBetterGuessMapCloser.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let int = setInterval(()=>{
        let cs = document.body.querySelectorAll('canvas');

        if (!cs.length) return;

       // clearInterval(int);

        cs.forEach((canvas)=>{
            if (canvas._metal) return;
            
            canvas.addEventListener('mousedown', (e)=>{
                document.querySelector('.guess-map').classList.remove('guess-map--active');
            });
            
            canvas._metal = true;
        });

    }, 1000);
})();
