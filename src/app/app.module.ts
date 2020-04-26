import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import{BsDropdownModule} from 'ngx-bootstrap/dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { soumettrecommentaireComponent } from './commentaires/soumettre-commentaire/soumettre-commentaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {menuComponent} from './Accueil/menu.component';
import {NgbdCarouselConfig} from './Carousel/carousel-config';

@NgModule({
  declarations: [
    AppComponent,
    soumettrecommentaireComponent,
    menuComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NgbModule,

    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
