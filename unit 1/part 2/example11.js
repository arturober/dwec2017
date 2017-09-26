"use strict";

function divClick(event) {
    // eventPhase: 1 -> capture, 2 -> target (clicked), 3 -> bubble
    console.log("you have clicked " + this.id + ". Phase: " + event.eventPhase);
};


window.addEventListener("load", e => {
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    div1.addEventListener('click',divClick, true);
    div2.addEventListener('click',divClick, true);
    div3.addEventListener('click',divClick, true);

})