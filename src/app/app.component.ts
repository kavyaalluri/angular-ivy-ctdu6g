import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  empolyee = {
    sno: 'A110',
    name: 'kavya',
    Age: 35,
    Desi: 'software Engineer',
    salary: 35000,
    group: 'Dev',
  };
}
