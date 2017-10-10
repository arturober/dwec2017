const NAME = "Pepe";

export class Person {
    constructor(name = NAME, age = 0) {
        this.name = name;
        this.age  = age;
    }

    toString() {
        return `${this.name} (${this.age})`;
    }
}

export function sayHello() {
    console.log("Hello world!");
}