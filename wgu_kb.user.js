// ==UserScript==
// @name         WGU education2 certification partners test keyboard interface
// @namespace    http://www.mattman00000.com
// @version      0.1.0
// @description  adds keyboard interface for practice tests e.g. C479 web technologies "course mastery"
// @author       mattman00000
// @match        https://education2.certification-partners.com/TestTake/testEntryPoint/*
// @grant        none
// @updateURL    https://github.com/mattman00000/wgu-certpartners-kbinterface/raw/master/wgu_kb.user.js
// ==/UserScript==

var cycler = 0;
var place = window.location.href;

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
        if (document.getElementById("nextQuestionButton")!=null) {document.getElementById("nextQuestionButton").click();} else
        if (document.getElementById("nextSection")!=null) {document.getElementById("nextSection").click();} else
        if (document.getElementById("te-FinalGrade")!=null) {
            if (document.getElementById("te-FinalGrade").innerText=="Further Study Required")
                {document.getElementsByClassName("te-exit")[0].click(); window.setTimeout(function() {window.location.assign(place);},300);} else
        if (document.getElementsByClassName("te-exit")[0]!=null) {document.getElementsByClassName("te-exit")[0].click();}} else
        { console.error("something weird happened"); }
    }else if (key == 82) {
        if (document.getElementById("question_responses")!=null) {
            if (cycler == 0) {
                document.getElementById("question_responses").style.display = "block";
                for (var i = 0; i<document.getElementsByClassName("correctContainer").length; i++) {
                    document.getElementsByClassName("correctContainer")[i].style.display = "none";
                }
                for (var i = 0; i<document.getElementsByClassName("incorrectContainer").length; i++) {
                    document.getElementsByClassName("incorrectContainer")[i].style.display = "block";
                }
                cycler++;
            } else if (cycler==1) {
                document.getElementById("question_responses").style.display = "block";
                for (var i = 0; i<document.getElementsByClassName("correctContainer").length; i++) {
                    document.getElementsByClassName("correctContainer")[i].style.display = "block";
                }
                for (var i = 0; i<document.getElementsByClassName("incorrectContainer").length; i++) {
                    document.getElementsByClassName("incorrectContainer")[i].style.display = "block";
                }
                cycler++;
            } else {
                document.getElementById("question_responses").style.display = "none";
                for (var i = 0; i<document.getElementsByClassName("correctContainer").length; i++) {
                    document.getElementsByClassName("correctContainer")[i].style.display = "none";
                }
                for (var i = 0; i<document.getElementsByClassName("incorrectContainer").length; i++) {
                    document.getElementsByClassName("incorrectContainer")[i].style.display = "none";
                }
                cycler=0;
            }
        }
    }
}
