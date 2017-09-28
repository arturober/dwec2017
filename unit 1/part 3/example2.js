"use strict";

class Person2015 {
    constructor(name = "Nobody", age = 100) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`My name is ${this.name} and I'm ${this.age}`);
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

let p2015 = new Person2015("Peter", 25);
p2015.sayHello();
console.log(p2015.toString());
console.log(p2015);

//-------------------------------

function PersonES5(name, age) {
    this.name = name || "Nobody";
    this.age = age || 100;
}

PersonES5.prototype.sayHello = function() {
    console.log(`My name is ${this.name} and I'm ${this.age}`);
}

PersonES5.prototype.toString = function() {
    return `${this.name} (${this.age})`;
}

let pES5 = new PersonES5("Old Peter", 46);
pES5.sayHello();
console.log(pES5.toString());
console.log(pES5);