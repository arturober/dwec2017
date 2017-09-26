"use strict";

function focus(e) {
    e.target.style.borderColor = "blue";
}

function blur(e) {
    e.target.style.borderColor = "inherit";
}

window.addEventListener("load", e => {
    let form = document.getElementById("form1");
    form.addEventListener("submit", e => {
        e.preventDefault();
        console.log(`Name: ${form.name.value}`);
        console.log(`Age: ${form.age.value}`);
        console.log(`Email: ${form.email.value}`);
        form.reset();
    });

    document.querySelectorAll("#form1 input").forEach(input => {
        input.addEventListener("focus", focus);
        input.addEventListener("blur", blur);
    });

    form.name.addEventListener("blur", e => {
        if(!form.name.value) {
            e.target.style.borderColor = "red";
            console.log("Name is required!");
        } else {
            e.target.style.borderColor = "green";
        }
    });
})