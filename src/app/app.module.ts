import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { NgImageSliderModule } from 'ng-image-slider';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MainContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgImageSliderModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
