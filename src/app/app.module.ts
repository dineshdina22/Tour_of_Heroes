import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ServerComponent } from './server.component';
import { DineshComponent } from './dinesh/dinesh.component';
import{FirstassesmentComponent}from'./firstassesment.component';
import {HtmlAssesmentComponent} from "./Task/htmlassesment.component";
import { StyleDirectiveComponent } from './style-directive/style-directive.component';
import { TourOfherosComponent } from './tour-ofheros/tour-ofheros.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    DineshComponent,
    FirstassesmentComponent,
    HtmlAssesmentComponent,
    StyleDirectiveComponent,
    TourOfherosComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  