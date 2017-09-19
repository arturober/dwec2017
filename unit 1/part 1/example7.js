"use strict";

/**
 * ARRAY METHODS
 */

let names = ["Peter", "John", "Mary", "Ann", "Joseph"];

let names2 = names.slice(1, 4);
console.log(names); // ["Peter", "John", "Mary", "Ann", "Joseph"]
console.log(names2); // ["John", "Mary", "Ann"]

let deleted = names.splice(2, 2); // Deletes 2 and 3
console.log(names); // ["Peter", "John", "Joseph"]
console.log(deleted); // ["Mary", "Ann"]

names.splice(1, 0, "Alice", "Bob");
console.log(names); // ["Peter", "Alice", "Bob", "John", "Joseph"]

names.splice(2, 2, "Paula");
console.log(names); // ["Peter", "Alice", "Paula", "Joseph"]

names.reverse();
console.log(names); // ["Joseph", "Paula", "Alice", "Peter"]

names.sort(); // Alphabetically
console.log(names); // ["Alice", "Joseph", "Paula", "Peter"]

console.log("------------------------------");

let nums = [7, 114, 27, 9, 201]; 
nums.sort((num1, num2) => num1 - num2); 
console.log(nums); // [7, 9, 27, 114, 201]

let persons = [
    {
        name: "Peter",
        age: 26
    }, {
        name: "John",
        age: 54
    }, {
        name: "Alice",
        age: 33
    }, {
        name: "Andrew",
        age: 54
    }, 
];

persons.sort((p1, p2) => {
    if(p1.age === p2.age)
        return p1.name.localeCompare(p2.name);
    else
        return p1.age - p2.age;
});
console.log(persons.map(p => `${p.name} (${p.age})`));

console.log("------------------------------");

let ns = [3, 6, 12, 6, 8, 6, 71, 8, 6];
console.log(ns.indexOf(6)); // 1
console.log(ns.lastIndexOf(6)); // 8

let pos = 0;

while((pos = ns.indexOf(6, pos)) !== -1) {
    console.log(`Found 6 in pos: ${pos++}`);
}


    
