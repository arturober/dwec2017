"use strict";

let name = prompt("What's your name?", "Idiot");

if(name)
    alert(`Your name is: ${name}`);
else {
    let stupid = confirm("Are you stupid?");
    if(stupid) alert("I knew it!!");
}

