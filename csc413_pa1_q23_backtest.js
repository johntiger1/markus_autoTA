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
    const set_mark = document.querySelector("#rubric_criterion_8 > div > table > tbody > tr:nth-child(5)").click()
    console.log("Mark set!")
    console.log("finished execution");
}

setTimeout(enter_marks,2000);