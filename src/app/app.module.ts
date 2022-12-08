import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabscomponentComponent } from './tabscomponent/tabscomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    TabscomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
