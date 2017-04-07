import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from "@angular/router"
import { MaterialModule } from '@angular/material';
import 'hammerjs/hammer';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HeroService } from './hero.service';
import { HeroSearchComponentComponent } from './hero-search-component/hero-search-component.component';
import { HighlightDirective } from './highlight.directive';

const appRoutes:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",loadChildren:'./about/about.module#AboutModule'},
  {path:"hero-detail/:id",component:HeroDetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroDetailComponent,
    HeroSearchComponentComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
