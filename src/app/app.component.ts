import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cong Dat';
  version = 'Angular ' + VERSION.major;
  inputType = "text"
  value = "default"

  // DATA BINDING

  // EVENT BINDING

  user = {
    name: "dat",
    age: 29
  };

  handler() {
    console.log("click !");
  }
}
