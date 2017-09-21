"use strict";

/**
 * MAP and SET
 */

let map = new Map();
map.set("John", 24);
map.set("Peter", 26);
map.set("Marcus", 34);
map.set("Anne", 64);

console.log(map);
console.log(map.has("Peter")); // true
console.log(map.get("Peter")); // 26

for(let key of map.keys()) {
    console.log(`${key}: ${map.get(key)}`);
}

console.log("-------------------------");

map.forEach((v, k) => console.log(`${k}: ${v}`));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let personsMap = new Map();
let p1 = new Person("Peter", 34);
let p2 = new Person("Mary", 34);
let p3 = new Person("Angelina", 34);
personsMap.set(p1, ["Movies", "Golf"]);
personsMap.set(p2, ["Games", "Football", "Beer"]);
personsMap.set(p3, ["Mushrooms", "Koalas"]);

console.log(personsMap.has(p1)); // true
personsMap.forEach((hobbies, person) => {
    console.log(`${person} -> ${hobbies}`);
});

console.log("---------------------");

let nameSet = new Set();
nameSet.add("John");
nameSet.add("Gustav");
nameSet.add("Paola");
nameSet.add("Irene");

console.log(nameSet.has("Irene")); // true
nameSet.delete("John");
console.log(nameSet.has("John")); // false

console.log(nameSet.size); // 3
nameSet.add("Paola");
nameSet.add("Paola");
nameSet.add("Paola");
console.log(nameSet.size); // 3

nameSet.forEach(n => console.log(n));

console.log("---------------------");

for(let name of nameSet) {
    console.log(name);
}
