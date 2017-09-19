"use strict";

/**
 * STRINGS
 * */

let s = "Hello, this is a string";
console.log(s.length);
console.log(s.charAt(5));
console.log(s.indexOf("is"));
console.log(s.lastIndexOf("is"));

let pos = -1;

while((pos = s.indexOf("i", pos + 1)) !== -1 ) {
    console.log(`Letter i is at position: ${pos}`);
}

console.log(s.match(/.s/g));
console.log(s.search(/.s/g));
console.log(s.replace(/[aeiou]/g, "*"));
console.log(s.slice(7, 11));
console.log(s.substring(7, 11));
console.log(s.substr(7, 4));

console.log(s.toLocaleLowerCase()); 
console.log(s.toLocaleUpperCase()); 

console.log(s.startsWith("Hello")); 
console.log(s.endsWith("string")); 

console.log("co".repeat(10));

let uStr = "Quiero una \u{1f354}";
console.log(uStr);
console.log(uStr.length);
console.log(Array.from(uStr).length);



