import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { SwitchButton } from './components/switch-button/switch-button.component';
import { Tabs } from './components/tabs/tabs.component';
import { Num } from './components/num/num.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchButton,
    Tabs,
    Num
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
