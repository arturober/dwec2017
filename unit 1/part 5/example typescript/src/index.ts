import {Map} from 'es6-collections';

let a: number = 23;
console.log(a);

let strings: string[];
strings = ["hello"];

let map: Map<string, number>;
map = new Map();
map.set("Hello", 23);

let p: {name: string, age?: number}; // age -> optional
p = {name: "Pepe", age: 24};

class Person {
    constructor(private name: string, private age: number) {} 
}