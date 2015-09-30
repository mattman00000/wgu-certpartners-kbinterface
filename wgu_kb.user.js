// ==UserScript==
// @name         WGU education2 certification partners test keyboard interface
// @namespace    http://www.mattman00000.com
// @version      0.0.3
// @description  adds keyboard interface for practice tests e.g. C479 web technologies "course mastery"
// @author       mattman00000
// @match        https://education2.certification-partners.com/TestTake/testEntryPoint/*
// @grant        none
// @updateURL    https://github.com/mattman00000/wgu-certpartners-kbinterface/raw/master/wgu_kb.user.js
// ==/UserScript==

window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 49) {
        document.forms[0].getElementsByClassName("mcInput")[0].click();
    }else if (key == 50) {
        document.forms[0].getElementsByClassName("mcInput")[1].click();
    }else if (key == 51) {
        document.forms[0].getElementsByClassName("mcInput")[2].click();
    }else if (key == 52) {
        document.forms[0].getElementsByClassName("mcInput")[3].click();
    }else if (key == 32) {
        document.getElementById("nextQuestionButton").click();
    }
}
