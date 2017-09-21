"use strict";

function createParagraph(value) {
    let p = document.createElement("p");
    p.innerText = value;
    let span = document.createElement("span");
    span.innerText = "X";
    span.style.color = "red";
    span.style.cursor = "pointer";
    span.style.float = "left";
    span.style.marginRight = "15px";
    p.appendChild(span);

    span.addEventListener("click", e => {
        p.parentElement.removeChild(p);
    });

    return p;
}

function loadEvents() {
    document.getElementById("addFirst").addEventListener("click", e => {
        let value = document.getElementById("value").value;
        let p = createParagraph(value);
        let container = document.getElementById("container");
        let first = container.firstElementChild;
        container.insertBefore(p, first);
    });

    document.getElementById("addLast").addEventListener("click", e => {
        let value = document.getElementById("value").value;
        let p = createParagraph(value); 
        document.getElementById("container").appendChild(p);
    });
}

window.addEventListener("load", e => {
    loadEvents();
});