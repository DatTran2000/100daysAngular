import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cong Dat';
  counter = 1;
  navs = ['Link', 'Active', 'Selected']
}
