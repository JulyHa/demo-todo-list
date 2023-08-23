import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ItemComponent} from './components/item/item.component';
import {ManagerItemComponent} from './components/manager-item/manager-item.component';
import {FormsModule} from "@angular/forms";
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component'
import {AppRoutingModule} from "./AppRoutingModule";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ManagerItemComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
