import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import{TableCommande} from './EmailClient'

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
  emailValue : string;
  email = new TableCommande("");
  public prixx = [];
  public totalprix=[]
  public sum = 0;
  public a = new Array(1);
  public prixfinal = 0;
  public prixArticle = 0;
  constructor(private _articleservice : ConnexionSService, private cookieService: CookieService) {

  }




  prixTotal(){

    for (let article of this.articles) {

      this.prixx.push(article.prix*article.quantite_article);

      if(this.articles.indexOf(article)==this.articles.length-1) {
        this.prixx.push(0);
      }

      if(this.prixx.includes(0)==true) {

  var sum = this.prixx.reduce((a,b) => a + b, 0)
  this.totalprix.push(sum)
  this.a[0]=this.totalprix[0]
  this.prixfinal=this.a[0];

      }

  }
  }
  zero(){
    this.emailValue=this.cookieService.get('Email');
    this.email.email=this.emailValue
    this._articleservice.DeletePanier(this.email).subscribe( //on soumet l'avis
    data => window.alert(data.message)
    )

  }


  ngOnInit() {
    this.emailValue=this.cookieService.get('Email');
    this.email.email=this.emailValue
    this._articleservice.getListePanier(this.email).subscribe( //on soumet l'avis
    data => this.articles = data
    )



  }



}
