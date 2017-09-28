"use strict";

let str = "I contain 123 numbers (93276), and more 45 numbers";
let expNum = /\d+/g;

console.log(expNum.exec(str));
console.log(expNum.exec(str));
console.log(expNum.exec(str));
console.log(expNum.exec(str));

console.log(str.match(expNum));

//------------------------------
let str2 = "Hello, my number is 23-6457-3456";
let expNum2 = /-(\d+)-/g;

let match = expNum2.exec(str2);
console.log(`Complete match: ${match[0]}. Number: ${match[1]}. Index: ${match.index}`);

let strEmail = "My email is user@domain.com. OK?";
let emailExp = /(\w+)@(\w+\.\w{2,4})/i;

let emailMatch = emailExp.exec(strEmail);
console.log(`Your email is ${emailMatch[0]}`);
console.log(`Username: ${emailMatch[1]}`);
console.log(`Domain: ${emailMatch[2]}`);

console.log("Hello world!".replace("world", "class"));
console.log("Hello world!".replace(/[aeiou]/g, "x"));

let str3 = "My age is 34 and I walked 3 km today";
let expr3 = /\d+/g;

console.log(str3.replace(expr3, (num) => num *2));
console.log(str3.replace(/\b([a-z])([a-z]*)\b/g, (word, iniLet, restWord) => {
    return iniLet.toLocaleUpperCase() + restWord;
}));