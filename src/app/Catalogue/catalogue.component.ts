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

public articles = [];
public AS : any;


constructor(private _articleservice : ConnexionSService,private cookieService: CookieService) {

}

selectedA() {
  console.log("Hello")
}
ngOnInit () {
  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);



}


}
