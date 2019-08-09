// ==UserScript==
// @name         HWI review index naar rechterkolom (desktop)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT
// @description  optimalisatie lay-out Hardware.Info reviews op desktopbreakpoint. Niet voorzien op gebruik op andere breakpoints!
// @author       kdw2060
// @match        https://be.hardware.info/artikel/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function moveReviewIndex(){
        var movethis = document.getElementById("articleIndex");
        var aside = document.getElementsByTagName("aside");
        movethis.style.marginBottom = '1em';
        aside[0].prepend(movethis);}
    moveReviewIndex();
})();