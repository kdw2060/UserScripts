// ==UserScript==
// @name         Colorcodes for StatusCake percentages
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT
// @description  color codes for statuscake percentages
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @author       kdw2060
// @match        https://uptime.statuscake.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function applyColorCodes(){
        $('.uptime').each(function(){
            let waarde = $(this).attr( "title" );
            console.log(waarde);
            if (waarde > 99.89) {$(this).css('background-color', '#33d133'); $(this).css('color', 'white'); $(this).css('padding', '.25em');}
            if (waarde > 94.99 && waarde < 99.9) {$(this).css('background-color', 'orange'); $(this).css('color', 'white'); $(this).css('padding', '.25em');}
            if (waarde < 95) {$(this).css('background-color', '#ff0000'); $(this).css('color', 'white'); $(this).css('padding', '.25em');}
        });
    }
    waitForKeyElements (".UptimeNumber", applyColorCodes);
})();