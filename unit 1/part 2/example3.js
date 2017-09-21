"use strict";

console.log("I'm at the first page");

// Event for capturing history navigation
window.onpopstate = function (event) {
    if (event.state) {
        console.log("I'm at page " + event.state.page);
    } else {
        console.log("I'm at the first page");
    }
};

let page = 1;
function goBack() {
    history.back();
}

function goNext() {
    // history.state == null if it's the first page
    let pageNum = history.state ? history.state.page + 1 : 2;
    history.pushState({ page: pageNum }, "");
    console.log("I'm at page " + pageNum);
}



