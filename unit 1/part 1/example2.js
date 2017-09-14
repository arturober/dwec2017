"use strict";

// FUNCTIONS

function hello() {
    console.log("Hello");
}

hello();

function hello2(name) {
    console.log(`Hello ${name}`);
}

hello2("Tom"); // Hello Tom
hello2("Tom", "Peter"); // Hello Tom
hello2(); // Hello undefined

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(4, 7)); // 11
console.log(sum("abc", "efg")); // abcefg

let f = function() {
    console.log("I'm anonymous function");
}

f();
let f2 = f;
f2();

// -------------------------------------

function operation(n1, n2, f) {
    return f(n1, n2);
}

console.log(operation(8, 6, function(num1, num2) { return num1 + num2; })); // 14
console.log(operation(8, 6, function(num1, num2) { return num1 - num2; })); // 2

// ARROW FUNCTIONS

let sumFunc = (n1, n2) => n1 + n2;
console.log(sumFunc(3, 4)); // 7
console.log(operation(8, 6, (n1, n2) => n1 * n2)); // 48

// DEFAULT PARAMETERS

function helloName(name = "Anonymous") {
    console.log(`Hello ${name}`);
}

helloName(); // Hello undefined



