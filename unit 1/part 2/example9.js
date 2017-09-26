"use strict";

window.addEventListener("load", e => {
    console.log("Window loaded");
});

window.addEventListener("resize", e => {
    console.log(`${window.outerWidth}, ${window.outerHeight}`);
});

let input1 = document.getElementById("input1");
input1.addEventListener("keypress", e => {
    console.log(`Event ${e.type}, element: ${e.target.id}: ${e.key}`);
});

function clickDiv(event) {
    console.log("Click: " + event.target.id);
}

document.getElementById("div1").addEventListener("click", clickDiv);
document.getElementById("div2").addEventListener("click", clickDiv);

let div3 = document.getElementById("div3");
div3.addEventListener("mouseenter", e => console.log("You have entered the DIV!"));
div3.addEventListener("mouseenter", e => e.target.style.backgroundColor = "red");
div3.addEventListener("mouseleave", e => e.target.style.backgroundColor = "transparent");
div3.addEventListener("mousemove", e => {
    console.log(`Div3: ${e.clientX}, ${e.clientY}`);
    e.target.style.backgroundColor = `rgb(${255*e.clientX/100}, ${255*(100-e.clientX)/100}, 0)`;
});

document.getElementById("a1").addEventListener("click", e => {
    alert("You can't go there!");
    e.preventDefault();
});