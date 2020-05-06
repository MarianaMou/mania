import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import{BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { soumettrecommentaireComponent } from './commentaires/soumettre-commentaire/soumettre-commentaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {accueilComponent} from './Accueil/accueil.component';
import {loginComponent} from './Login/login.component';
import {registrationComponent} from './Registration/registration.component';
import {catalogueComponent} from './Catalogue/catalogue.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import{articleComponent} from "./Article/article.component"

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    soumettrecommentaireComponent,
    accueilComponent,
    loginComponent,
    registrationComponent,
    catalogueComponent,
    articleComponent,

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
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
