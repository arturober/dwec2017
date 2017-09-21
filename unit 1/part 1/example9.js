"use strict";

/**
 * ARRAY METHODS
 */

function sum(...nums) {
    return nums.reduce((t, n) => t + n);
}

console.log(sum(3, 5, 7));
console.log(sum(10, 10, 10, 20, 20, 20));

function printJobs(name = "Idiot", ...jobs) {
    console.log(`${name} (${jobs.join(" - ")})`);
}

printJobs("Marta", "Chicken sexer", "Police officer", "Clown");
printJobs("Peter");
printJobs();

let nums = [23, 13, 9, 43, 26, 18];
console.log(Math.max(...nums));
console.log(nums.reduce((total, num) => num > total ? num : total ));

let numsCopy = [...nums];
console.log(numsCopy);

let [n1, n2, n3] = nums;
console.log(n2); // 13

let [m1,,,m4,,m6] = nums;
console.log(`${m1} ${m4} ${m6}`);

let names = ["Peter", "John"];
let [na1 = "Anonymous", na2 = "Anonymous", na3 = "Anonymous"] = names;
console.log(na3);

let [num1, num2, ...nums2] = nums;
console.log(nums2); // [9, 43, 26, 18]