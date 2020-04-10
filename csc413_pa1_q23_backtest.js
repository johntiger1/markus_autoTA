// ==UserScript==
// @name         CSC413 Q2/Q3 autoscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Marking automation
// @author       John
// @match https://markus.teach.cs.toronto.edu/*
// @grant        none
// @require https://unpkg.com/browse/react-dom@15.6.1/lib/ReactTestUtils.js
// ==/UserScript==

(function() {
    //'use strict';
    //var ReactTestUtils = require('react-dom/test-utils')
    //var ReactTestUtils = window.
    console.log(ReactTestUtils)
    console.log("script running");
    const top_level = document.querySelector("#rubric_criterion_8")
    console.log(top_level)
    top_level.click()
    console.log("Question clicked!")
    const set_mark = document.querySelector("#rubric_criterion_8 > div > table > tbody > tr:nth-child(5)").click()
    console.log("Mark set!")

    //    document.querySelector("#rubric_criterion_8 > div > div").click()
  //  document.querySelector("#rubric_criterion_8 > div > table > tbody > tr:nth-child(5) > td.level-description").click()
    console.log("finished execution");
// @include http://*/*
// @include https://*/*
    // @include http://*/*
// @include https://markus.teach.cs.toronto.edu/csc413-2020-01/assignments/2/*/*
    // Your code here...
    // @match https://markus.teach.cs.toronto.edu/csc413-2020-01/assignments/2/*/*
    // @include https://markus.teach.cs.toronto.edu/csc413-2020-01/assignments/2/*/*
// @include http://markus.teach.cs.toronto.edu/csc413-2020-01/assignments/2/*/*
// @include http://*/*
// @include https://*/*
})();