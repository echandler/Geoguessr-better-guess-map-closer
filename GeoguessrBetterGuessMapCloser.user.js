// ==UserScript==
// @name         Geoguess better map closer v3.2.
// @namespace    Geoguess better map closer
// @version      3.2
// @description  Better map closer.
// @author       echandler
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @downloadURL  https://github.com/echandler/Geoguessr-better-guess-map-closer/raw/main/GeoguessrBetterGuessMapCloser.user.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
     let activeClass = null;

    setInterval(function(){
       const guessmap = document.querySelector("div[data-qa='guess-map']");
       const canvas = document.querySelector("canvas");
       
       if (guessmap && !guessmap._n) {
            // Sometimes the guess map doesn't open back up.
           
            guessmap.addEventListener("mouseover", function(e){
                if (!activeClass) return;
                guessmap.classList.add(activeClass);
            });
            guessmap._n = true;
       }
       if (canvas && !canvas._n) {
           canvas.addEventListener("mousedown", function(){
              const guessmap = document.querySelector("div[data-qa='guess-map']");
              if (!activeClass){
                activeClass = Array.from(guessmap.classList).reduce((x,a)=> x + (/active/i.test(a)? a: ""), "");
              }
              guessmap.classList.remove(activeClass);
           });
           canvas._n = true;
       }
   }, 2000);
})();
