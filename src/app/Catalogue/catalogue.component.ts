import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import {OnInit} from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',


})
export class catalogueComponent implements OnInit{
public articles = [];
public images = ["./../../assets/images/nature/listeArticle/robe.jpg","./../../assets/images/nature/listeArticle/jupecrayon.jpg",
"./../../assets/images/nature/listeArticle/dress.jpg"];

constructor(private _articleservice : ConnexionSService) {}

ngOnInit () {
  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

}
}
