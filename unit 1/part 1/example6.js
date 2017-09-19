"use strict";

/**
 * ARRAYS
 */

let a = new Array();
let a2 = new Array(23, 34, 56);
let a3 = new Array(5); // 5 * undefined
let a4 = Array.from(5); // 1 posición -> 0
let a5 = [5];

let nums = [10, 20];
nums[4] = 50;
console.log(nums);

let words = ["house", "dog", "cat", "table"];
words.length = 2;
console.log(words);
words.length = 4;
console.log(words);

let things = ["pen", "car", "house", "rubber"];

for(let i = 0; i < things.length; i++) {
    console.log(`Position ${i}: ${things[i]}`);
}

for(let i in things) {
    console.log(`Position ${i}: ${things[i]}`);
}

for(let thing of things) {
    console.log(`${thing}`);
}

for(let [i, thing] of things.entries()) {
    console.log(`Position ${i}: ${thing}`);
}

things.forEach((thing, i, array) => console.log(`Position ${i}: ${thing}`));

let person = {
    name: "Peter",
    age: 36,
    job: "Clown"
};

for(let prop in person) {
    console.log(`${prop}: ${person[prop]}`);
}

let str = "Hello world!";
for(let letter of str) {
    console.log(letter);
}

Array.from(str).forEach(letter => console.log(letter));

let aa = [1, 2, 3];
let bb = [4, 5, 6];
let cc = aa.concat(bb);
console.log(cc);



