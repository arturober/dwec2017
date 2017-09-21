"use strict";

document.getElementById("click").addEventListener('click', e => {
    let names = document.querySelectorAll(".c3 input[name='name']");
    names.forEach(input => {
        input.value = (Math.random() * 10).toFixed(0);
    });
});