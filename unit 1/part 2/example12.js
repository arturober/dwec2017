"use strict";

let d1 = new Date(2021, 9, 18, 10, 5, 0);
let now = new Date();

let difSeg = Math.trunc(Math.abs(d1.getTime() - now.getTime()) / 1000);
let seg = difSeg % 60;
let minTotal = Math.trunc(difSeg / 60);
let min = minTotal % 60;
let hourTotal = Math.trunc(minTotal / 60);
let hours = hourTotal % 24;
let daysTotal = Math.trunc(hourTotal / 24);

console.log(`
Time to ${d1.toISOString()}:
    ${daysTotal} days
    ${hours} hours
    ${min} minutes
    ${seg} seconds
`);
