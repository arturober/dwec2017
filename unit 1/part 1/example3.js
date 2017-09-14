"use strict";

/**
 * DATA TYPES
 */

let n = 3.14159;
console.log(typeof n); // number
console.log(n.toFixed(2)); // 3.14
console.log(n.toExponential()); // 3.14159e+0
console.log(4.1924.toFixed(1)); // 4.2
console.log((4).toFixed(2)); // 4.00

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

let i = Number.MAX_VALUE * 2; 
console.log(i); // Infinity
console.log(Number.isFinite(i)); // false

console.log(4 + "hello"); // 4hello
console.log(4 + true); // 5
console.log("4" + true); // 4true
console.log(4 * "hello"); // NaN
console.log(4 * "5"); // 20

let n1 = "15";
let n2 = "7";
console.log(Number.parseInt(n1) + Number(n2)); // 22
console.log(+n1 + +n2); // 22

// Strings

let s = "cad";
console.log(typeof s); // string

let c1 = 13;
let c2 = 15;
console.log(c1.toString() + c2); // 1315
console.log(String(c1) + c2); // 1315
console.log("" + c1 + c2); // 

// BOOLEANS

console.log(Boolean(0));
console.log(!!0);