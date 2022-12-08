import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabscomponent',
  templateUrl: './tabscomponent.component.html',
  styleUrls: ['./tabscomponent.component.css']
})
export class TabscomponentComponent implements OnInit {

  constructor() { }
  
  @Input() navs : string[];

  ngOnInit(): void {
  }

}
