import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class panierComponent implements OnInit {
  public cookieValue : string ;
  public articles =[];
  public listePanier = [];
  public total = 0;


  constructor(private _articleservice : ConnexionSService, private cookieService: CookieService) {

  }

  zero(){
    this.total = 0;}

  somme(prix: number){
    this.total=this.total + prix;
  }


  ngOnInit() {

    this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

    this.cookieValue = this.cookieService.get('PanierListe');
    this.listePanier = this.cookieValue.split(',');
    console.log(this.listePanier);

  }
}
