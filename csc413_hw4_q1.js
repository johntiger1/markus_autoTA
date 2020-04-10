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
    const set_mark = document.querySelector("tr.rubric-level:nth-child(5)").click() //#rubric_criterion_21 > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(5)
    document.querySelector("#rubric_criterion_22 > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(5)").click()
    document.querySelector("#rubric_criterion_23 > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(5)").click()
    console.log("Mark set!");

    console.log("finished execution");
}

setTimeout(enter_marks, 1000); //input boxes load very rapidly; even 2 will work here