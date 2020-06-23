import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';
import{EmailCli} from './../Profil/EmailCli';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class commandeComponent implements OnInit {
  public listeCommandes = [];
  public emailValue : String;
  public total = 0;
  EmailClient = new EmailCli("");

  constructor(private _articleservice : ConnexionSService,private cookieService: CookieService) {

  }
  ngOnInit(): void {
    this.emailValue = this.cookieService.get('Email');
    this.EmailClient.Email=this.emailValue;

    this._articleservice.getListeCommandes(this.EmailClient)
    .subscribe(data => this.listeCommandes = data);
  }
  somme(prix: number){
    this.total=this.total + prix;
  }
  zero(){
    this.total = 0;
  }

}
