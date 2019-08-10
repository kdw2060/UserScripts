// ==UserScript==
// @name         Zet alle aquabrowser zoekresultaten op een selectielijst
// @namespace    http://tampermonkey.net/
// @version      0.1
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @description  hacking library tools is cool!
// @author       kdw2060
// @include      http://zoeken.*.bibliotheek.be/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        
    function selecteerAlles() {
        //selecteer het eerste item
        $("#resultContainer li:first .record-selection-toggle a").trigger("click");
        
        //selecteer de overige items
        $("#resultContainer li:first ~ li .record-selection-toggle a").trigger("click");
        
        //zet alvast de volgende pagina klaar als die er is
         if ($("#resultsPaging .next")) {
                $("#resultsPaging .next a").delay(500).trigger("click");
                $(document).ajaxComplete(function() {
                    $("#selecteerAllesLink").remove();
                });
         }
    }
    
    //even wachten tot de alle AJAX-onderdelen van de pagina geladen zijn alvorens de 'selecteer alles' link te tonen
    function toonLink() {
        $(".feedback-query").append("&nbsp;&nbsp;<a href='javascript:void('0')' id='selecteerAllesLink'>Selecteer alle items</a>");
        $("#selecteerAllesLink").click(function() {selecteerAlles();});
    }
    waitForKeyElements (".feedback-query", toonLink);
    
})();