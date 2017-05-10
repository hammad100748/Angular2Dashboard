import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import {UserService} from "./services/UserService/user.service";
import {DashboardService} from "./services/DashboardService/dashboard.service";
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './components/graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    NavbarComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AppRoutingModule
  ],
  providers: [UserService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
