import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  legend = 'Fruits exports';
  view = [600, 400]; // Size (undefined -> parent container size)
  data: {name: string, value: number}[] = [{
    name: 'Banana',
    value: 2000
  }, {
    name: 'Apple',
    value: 3500
  }];
  selected: {name: string, value: number} = null;

  newFruit: {name: string, value: number} = {
    name: '',
    value: 0
  };

  onSelect(result) {
    this.selected = result;
  }

  addFruit() {
    // We can't do a push, we need to replace the array
    this.data = [...this.data, this.newFruit];
    this.newFruit = { name: '', value: 0};
  }

  deleteSelected() {
    this.data = this.data.filter(f => f.name !== this.selected.name);
  }

  updateSelected() {
    this.data[this.data.findIndex(f => f.name === this.selected.name)] = this.selected;
    this.data = [...this.data];
  }
}
