// ==UserScript==
// @name         Ecosia to google.
// @namespace    https://github.com/geisterfurz007
// @version      1.0
// @description  Link to google with the same search from Ecosia.
// @author       geisterfurz007
// @match        https://www.ecosia.org/search*
// @match        https://ecosia.org/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const searchBarParent = document.querySelector(".search-box").parentElement;
    
    const div = document.createElement("div");
    div.classList.add("col-lg-2");
    
    const a = document.createElement("a");
    const urlRegex = /https.*?search\?.*?(q=.*)/
    const query = window.location.toString().match(urlRegex)[1];
    a.href = "https://google.com/search?" + query;
    a.classList.add("btn", "btn-primary");
    a.style = "margin-top: 1px;";
    a.id = "MongoBohne";
    a.innerText = "Link to Google";

    div.appendChild(a);
    
    const a2 = document.createElement("a");
    const query = window.location.toString().match(urlRegex)[1];
    a2.href = "https://duckduckgo.com/?q=" + query;
    a2.classList.add("btn", "btn-primary");
    a2.style = "margin-top: 1px;";
    a2.id = "MongoBohne";
    a2.innerText = "Link to DDG";
    
    div.appendChild(a2);
    
    const reference = searchBarParent.parentElement.children[2];
    searchBarParent.parentElement.insertBefore(div, reference);
    
    // searchBarParent.parentElement.appendChild(div);
    
})();
