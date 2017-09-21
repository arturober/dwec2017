"use strict";

/**
 * ARRAY METHODS
 */

let nums = [2, 5, 13, 26, 57, 99];
console.log(nums.every(num => num < 100)); // true
console.log(nums.every(num => num % 2 === 0)); // false

console.log(nums.some(num => num % 2 === 0)); // true

let sum = 0;
nums.forEach(num => sum += num);
console.log(sum); // 202

let doubles = nums.map(num => num * 2);
console.log(doubles); // [4, 10, 26, 52, 114, 198]

let persons = [
    {
        name: "Peter",
        age: 56,
        subjects: ["Maths", "Biology"]
    }, {
        name: "Maria",
        age: 35,
        subjects: ["History", "Physics", "English"]
    }, {
        name: "Marcus",
        age: 74,
        subjects: ["Geology"]
    }
];

let ages = persons.map(person => person.age);
console.log(ages); // [56, 35, 74]
let names = persons.map(person => person.name);
console.log(names); // ["Peter", "Maria", "Marcus"]
let subjects = persons.map(p => `${p.name} (${p.subjects.join("-")})`);
console.log(subjects);

let nums2 = [2, 5, 13, 26, 57, 99];
let pairs = nums2.filter(num => num % 2 === 0);
console.log(pairs); // [2, 26]
let doubleOdds = nums2.filter(n => n % 2 === 1).map(n => n * 2);
console.log(doubleOdds); // [10, 26, 114, 198]

let sum2 = nums2.reduce((total, num) => total + num);
console.log(sum2); // 202
let subs = nums2.reduceRight((total, num) => total - num);
console.log(subs); // -4

console.log(nums2.filter(num => num % 2 === 0).reduce((t, n) => t * n)); // 52

let zeros = new Array(8);
zeros.fill(0);
console.log(zeros); // [0, 0, 0, 0, 0, 0, 0, 0]
zeros.fill(99, 2, 5);
console.log(zeros); // [0, 0, 99, 99, 99, 0, 0, 0]

let nums3 = [2, 3, 7, 8, 13, 24, 65];
console.log(nums3.find(num => num > 10));
console.log(nums3.findIndex(num => num > 10));

