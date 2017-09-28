"use strict";

var obj = new Object();
obj.a = 12;
obj.b = "Bye";
obj.sayHello = function() {
    setTimeout(() => {
        console.log(`Obj: My property a is ${this.a}`);
    },2000);
}

console.log(obj);
console.log(obj.a, obj.b);
console.log(obj["a"], obj["b"]);
obj.sayHello();

var objJson = {
    a: 23,
    b: "Hello",
    sayHello() {
        setTimeout(() => {
            console.log(`ObjJSON: My property a is ${this.a}`);
        },2000);
    }
};
console.log(objJson);
objJson.sayHello();
