import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { accueilComponent } from './Accueil/accueil.component';
import {loginComponent} from './Login/login.component';
import {registrationComponent} from './Registration/registration.component';
import {catalogueComponent} from './Catalogue/catalogue.component';
import { articleComponent } from './Article/article.component';


const routes: Routes = [
  {path:'', component: accueilComponent},
  {path:'login', component: loginComponent},
  {path:'registration', component: registrationComponent},
  {path:'catalogue', component: catalogueComponent},
  {path:'article', component: articleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
