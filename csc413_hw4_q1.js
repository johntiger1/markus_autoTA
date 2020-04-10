// ==UserScript==
// @name         CSC413 HW4 Q1 autoscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Marking automation
// @author       John
// @match https://markus.teach.cs.toronto.edu/*
// @grant        none
// ==/UserScript==


function enter_marks(){
    
    console.log("script running");
    const set_mark = document.querySelector("#flexible_criterion_40 > div > span > input[type=text]")
    set_mark.value=1;
    document.querySelector("#flexible_criterion_39 > div > span > input[type=text]").value=1
    document.querySelector("#flexible_criterion_38 > div > span > input[type=text]").value=1
    
    console.log("Mark set!");

    console.log("finished execution");
}

setTimeout(enter_marks, 1000); //input boxes load very rapidly; even 2 will work here