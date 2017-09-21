"use strict";

/**
 * INTERVAL TIMEOUT
 */


// setTimeout(() => {
//     console.log("Hello! We begin!");
//     let i = 0;
//     let interval = setInterval(() => {
//         console.log(i++);
//         if(i === 5) clearInterval(interval);
//     }, 1000);
// }, 3000);

// let cont = 0;
// function startTimeout() {
//     setTimeout(() => {
//         console.log(cont++);
//         if(cont < 5) startTimeout();
//     }, 1000);
// }

// startTimeout();

let timeout = setTimeout(() => console.log("Hello"), 2000);
console.log("Goodbye");
