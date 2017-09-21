"use strict";

console.log(document.body.children);
console.log(document.getElementById("div3"));
console.log(document.getElementsByClassName("d2"));
console.log(document.getElementsByTagName("div"));

let div1 = document.getElementsByClassName("d1")[0];
console.log(div1.getElementsByTagName("p"));

console.log("DIV 1 CHILDREN:");
for(let e of div1.children) {
    console.log(e);
}

console.log("DIV 1 CHILDNODES:");
for(let e of div1.childNodes) {
    console.log(e);
}

console.log("NEXT PARAGRAPH:");
let p1 = document.getElementsByTagName("div")[0].children[0];
console.log(p1);
console.log(p1.nextElementSibling);
console.log(p1.nodeName);
console.log(p1.nodeType);
console.log(p1.textContent);
console.log(p1.innerText);

p1.innerText = `Hola, voy
a cambiar el
<strong>texto</strong>`;
