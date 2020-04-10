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
    const set_mark = document.querySelector("#flexible_criterion_40 > div > span > input[type=text]");
    console.log("it it too dynamic");
    console.log(set_mark);
    set_mark.value=1;
    console.log("Mark set!");

    console.log("finished execution");
}

//We dont need to immediately call this function, we can treat this as a regular old javascript file!
(function() {
    //'use strict';
    //var ReactTestUtils = require('react-dom/test-utils')
    //var ReactTestUtils = window.
    //console.log(ReactTestUtils)
    
    console.log("script running");
    const set_mark = document.querySelector("#flexible_criterion_40 > div > span > input[type=text]");
    console.log("it it too dynamic");
    console.log(set_mark);
    set_mark.value=1;
    console.log("Mark set!");

    console.log("finished execution");

})();

setTimeout(fn, 3);