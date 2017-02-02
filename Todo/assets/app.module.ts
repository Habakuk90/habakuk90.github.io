import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { APP_ROUTES } from './app.routes';
import { AboutComponent } from './component/about.component';
import { HomeComponent } from './component/home.component';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(APP_ROUTES, {useHash: true} )  ],
  declarations: [ AppComponent, AboutComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
