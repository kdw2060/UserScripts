// ==UserScript==
// @name         Toon TJV teller in dagen
// @namespace    https://github.com/kdw2060/XtremisHack
// @version      0.1
// @description  lets make it easier for ourselves
// @author       kdw2060
// @include      *xtremissrv.pa.be*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var tellervelden = document.getElementsByClassName('calLegendTitle');
    var teller;
    setTimeout(function(){
        for (i=0; i < tellervelden.length; i++) {
        if (tellervelden.item(i).innerText == "TJV") { teller = i + 1;}
        }
        
        var tjvUrenMinuten = tellervelden.item(teller).innerText;
        var UrenMinuten = tjvUrenMinuten.split(/:/);
        var Uren = UrenMinuten[0];
        var Minuten = UrenMinuten[1];
        var MinutenTotaal = (Uren*60) + parseInt(Minuten);
        
        var tjvdagen = Math.floor((MinutenTotaal/60)/7.6);
        var tjvuren = Math.floor((MinutenTotaal/60)%7.6);
        var tjvminuten = Math.floor((((MinutenTotaal/60)%7.6)%1)*60);
        
        tellervelden.item(teller).innerHTML = tjvdagen + " dagen, " + tjvuren + " uren en " + tjvminuten + " minuten";
    }, 500);
    
})();