"use strict";

window.addEventListener("load", e => {
    document.getElementById("toggleClass").addEventListener("click", e => {
        let div = document.getElementById("div");
        if(div.classList.contains("red")) {
            div.classList.remove("red");
        } else {
            div.classList.add("red");
        }
    });
});