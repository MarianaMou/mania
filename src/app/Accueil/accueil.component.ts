import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import {ConnexionSService} from './../Services/connexion-s.service';
import {OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class accueilComponent implements OnInit {
  public cookieValue : string ;
  public cookieFinal = "";
  public articles =[];
  public listePanier = [];
  constructor(private router: Router,private _articleservice : ConnexionSService, private cookieService: CookieService){

  }
  ngOnInit() {
    this.cookieValue = this.cookieService.get('PanierListe');
    this.cookieFinal = this.cookieFinal.concat(this.cookieValue);
    this.cookieService.set('PanierListe', this.cookieFinal);

    console.log(this.cookieFinal);
  }



}
