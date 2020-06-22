import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { accueilComponent } from './Accueil/accueil.component';
import {loginComponent} from './Login/login.component';
import {registrationComponent} from './Registration/registration.component';
import {catalogueComponent} from './Catalogue/catalogue.component';
import { articleComponent } from './Article/article.component';
import { profilComponent } from './Profil/profil.component';
import { commandeComponent} from './Commande/commande.component';


const routes: Routes = [
  {path:'', component: accueilComponent},
  {path:'login', component: loginComponent},
  {path:'registration', component: registrationComponent},
  {path:'catalogue', component: catalogueComponent},
  {path:'article/:id', component: articleComponent},
  {path:'profil', component : profilComponent},
  {path:'commande', component : commandeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
