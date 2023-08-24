import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./components/register/register.component";
import { ManagerItemComponent } from './components/manager-item/manager-item.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"login",title: 'Login', component: LoginComponent},
  {path:"register", title:'Register', component:RegisterComponent},
  {path:"item", title:'Item', component:ManagerItemComponent},
  {path:"view/:id", title:'Detail Item', component:ViewItemComponent},
  {path: '', redirectTo:'/login',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
