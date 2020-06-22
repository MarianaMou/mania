import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class profilComponent implements OnInit {
  public nameValue : String ;
  public firstnameValue: String;
  public telValue : String;
  public emailValue : String;




  constructor(private _articleservice : ConnexionSService, private cookieService: CookieService) {

  }

  ngOnInit() {
    this.nameValue = this.cookieService.get('Nom');
    this.firstnameValue = this.cookieService.get('Prenom');
    this.telValue = this.cookieService.get('Telephone');
    this.emailValue = this.cookieService.get('Email');


  }
}
