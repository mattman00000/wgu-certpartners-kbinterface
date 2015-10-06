// ==UserScript==
// @name         WGU education2 certification partners test keyboard interface
// @namespace    http://www.mattman00000.com
// @version      0.1.3
// @description  adds keyboard interface for practice tests e.g. C479 web technologies "course mastery"
// @author       mattman00000
// @match        https://education2.certification-partners.com/*
// @grant        none
// @updateURL    https://github.com/mattman00000/wgu-certpartners-kbinterface/raw/master/wgu_kb.user.js
// ==/UserScript==
console.warn("WGU Keyboard Interface Initializing");
console.info("localStorage.wguhref is "+localStorage.wguhref);
console.info("localStorage.wgufail is "+localStorage.wgufail);

if (window.location.href.substring(0,window.location.href.lastIndexOf("/"))==
    "https://education2.certification-partners.com/TestTake/testEntryPoint") 
{
    console.log("Test Page Loaded");
    var cycler = 0;
    window.onkeyup = function(e) {
        console.debug("OnKeyUp Event Start")
        var key = e.keyCode ? e.keyCode : e.which;
        if (key == 49) {
            console.debug("Option 1");
            document.forms[0].getElementsByClassName("mcInput")[0].click();
        }else if (key == 50) {
            console.debug("Option 2");
            document.forms[0].getElementsByClassName("mcInput")[1].click();
        }else if (key == 51) {
            console.debug("Option 3");
            document.forms[0].getElementsByClassName("mcInput")[2].click();
        }else if (key == 52) {
            console.debug("Option 4");
            document.forms[0].getElementsByClassName("mcInput")[3].click();
        }else if (key == 32) {
            console.debug("Space");
            cycler = 0;
            if (document.getElementById("nextQuestionButton")!=null) {document.getElementById("nextQuestionButton").click();} else
            if (document.getElementById("nextSection")!=null) {document.getElementById("nextSection").click();} else
            if (document.getElementById("te-FinalGrade")!=null) {
                if (document.getElementById("te-FinalGrade").innerText=="Further Study Required") {
                    localStorage.wguhref = window.location.href;
                    localStorage.wgufail = "true";
                    console.info("localStorage.wguhref is "+localStorage.wguhref);
                    console.info("localStorage.wgufail is "+localStorage.wgufail);
                }
            if (document.getElementsByClassName("te-exit")[0]!=null) {document.getElementsByClassName("te-exit")[0].click();}} else
            { console.error("something weird happened"); }
        }else if (key == 82) {
            console.debug("R key press");
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
} else if ((window.location.href=="https://education2.certification-partners.com/view/desktop/home.asp")&&(localStorage.wgufail=="true")) {
    console.debug("Fail Page Loaded")
    localStorage.wgufail = "false";
    console.info("localStorage.wguhref is "+localStorage.wguhref);
    console.info("localStorage.wgufail is "+localStorage.wgufail);
    window.location.href = localStorage.wguhref;
}
console.info("localStorage.wguhref is "+localStorage.wguhref);
console.info("localStorage.wgufail is "+localStorage.wgufail);
console.warn("WGU Keyboard Interface Terminate");
