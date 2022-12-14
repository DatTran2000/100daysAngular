import { Component, Input,Output ,OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tabscomponent',
  templateUrl: './tabscomponent.component.html',
  styleUrls: ['./tabscomponent.component.css']
})
export class TabscomponentComponent {
  @Input() navs! : string[];
  @Input() linkTemplate!: TemplateRef<any>;

}
