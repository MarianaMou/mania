import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import{EmailCli} from './../Profil/EmailCli'
@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})
export class CommandesComponent implements OnInit {
  public listeCommandes = [];
  public emailValue : String;
  EmailClient = new EmailCli("");
  constructor(private _articleservice : ConnexionSService, private cookieService: CookieService,) { }

  ngOnInit(): void {
    this.emailValue = this.cookieService.get('Email');
    this.EmailClient.Email=this.emailValue;

    this._articleservice.getInfoClient(this.EmailClient)
    .subscribe(data => this.listeCommandes = data);
  }

}
