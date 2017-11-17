import { Component } from '@angular/core';

@Component({
  selector: 'ad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ad';
  color = 'yellow';

  persons = [{
    name: 'John',
    age: 14
  }, {
    name: 'Marta',
    age: 24
  }, {
    name: 'Steven',
    age: 43
  }];

  filter = (p) => p.age >= 18;
}
