import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import {OnInit} from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import {Client} from './../client';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']


})
export class catalogueComponent implements OnInit{
private cookieValue : String;
public articles = [];


constructor(private _articleservice : ConnexionSService,private cookieService: CookieService) {}

ngOnInit () {
  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);



  //this.cookieValue = this.cookieService.get('Connecte'); // ici, par exemple, on a accès à l'email de l'utilisateur.
  //this.cookieService.set('Se connecter','true');
  //this.cookieValue = this.cookieService.get('Se connecter');

  //console.log(this.cookieValue);

}


}
