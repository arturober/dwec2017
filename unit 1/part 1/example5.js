"use strict";

// Try with var
for(let i = 1; i <= 10; i++) {
    let div = document.createElement("div");
    div.textContent = `DIV ${i}`;
    document.body.appendChild(div);

    div.addEventListener("click", e => {
        console.log(`Soy el div ${i}`);
    });
}


