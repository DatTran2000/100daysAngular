import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabscomponent',
  templateUrl: './tabscomponent.component.html',
  styleUrls: ['./tabscomponent.component.css']
})
export class TabscomponentComponent {

  
  @Input()
  navs!: string[];


}
