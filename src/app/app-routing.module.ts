import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {GraphComponent} from "./components/graph/graph.component";

const routes: Routes = [
  { path: '',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component:LoginPageComponent},
  {path:'graph',component:GraphComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
