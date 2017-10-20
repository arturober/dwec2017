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

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }

    getPlusYears(yearSum: number) : number {
        return this.age + yearSum;
    }

    toString() : string {
        return `${this.getName()} - ${this.getAge()}`;
    }
}

let f: (num1: number, num2: number) => number;
f = (n1, n2) => n1 + n2;

let person = new Person("John", 45);
console.log(person.getPlusYears(5));

class User extends Person {
    constructor(name: string, age: number, private email: string) {
        super(name, age);    
    }

    getEmail() : string {
        return this.email;
    }

    toString() : string {
        return `${this.getName()} - ${this.getAge()} (${this.email})`;
    }
}

let u: Person = new User("Marta", 24, "marta@email.com");
console.log(u instanceof User);
console.log((<User>u).getEmail());
console.log((<User>u).toString());
console.log(u.toString());

let button = <HTMLButtonElement>document.getElementById("checkInput");
button.addEventListener("click", event => {
    let input = <HTMLInputElement>document.getElementById("name");
    console.log(input.value);
});