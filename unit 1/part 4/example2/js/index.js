import {Person, sayHello} from './person.class.js';
import css from '../style.css';
import personTemplate from '../templates/person.handlebars';
import personsTemplate from '../templates/persons.handlebars';

let p = new Person("Peter", 23);
let p2 = new Person("Mary", 45);
console.log(p.toString());
console.log(p2.toString());

let persons = [
    p, p2, new Person("Mary", 34), new Person("Lucy", 25)
]

let tbody = document.querySelector("#persons tbody");
tbody.innerHTML = personsTemplate({persons});
// persons.forEach(p => {
//     let tr = document.createElement("tr");
//     tr.innerHTML = personTemplate(p);
//     tbody.appendChild(tr);
// });

sayHello();