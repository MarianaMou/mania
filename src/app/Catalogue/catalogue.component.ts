import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import {OnInit} from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']


})
export class catalogueComponent implements OnInit{
public articles = [];
public images = ["./../../assets/images/nature/listeArticle/sweatshirt-gray.jpg","./../../assets/images/nature/listeArticle/jupe-plissée-burnthenna.jpg",
"./../../assets/images/nature/listeArticle/jupe-crayon-black.jpg","./../../assets/images/nature/listeArticle/débardeur-deep-teal.jpg", "./../../assets/images/nature/listeArticle/debardeur-black.jpg",
 "./../../assets/images/nature/listeArticle/blouse-blush.jpg", "./../../assets/images/nature/listeArticle/robe-de-soirée-rouge.jpg","./../../assets/images/nature/listeArticle/robe-d'été-noir.jpg",
 "./../../assets/images/nature/listeArticle/robe-de-soirée-rust.jpg","./../../assets/images/nature/listeArticle/veste-dhiver-amphora.jpg", "./../../assets/images/nature/listeArticle/veste-legere-black.jpg",
 "./../../assets/images/nature/listeArticle/robe-été-belleblue.jpg","./../../assets/images/nature/listeArticle/robe-soirée-babytweed.jpg", "./../../assets/images/nature/listeArticle/tshirt-white.jpg",
 "./../../assets/images/nature/listeArticle/jupe-crayon-mediumblue.jpg","./../../assets/images/nature/listeArticle/jupe-trapeze-black.jpg", "./../../assets/images/nature/listeArticle/p-classique-black.jpg",
 "./../../assets/images/nature/listeArticle/jupe-pli-rasberry.jpg","./../../assets/images/nature/listeArticle/pack_debardeur_blackpink.jpg", "./../../assets/images/nature/listeArticle/jupe-plissée-black.jpg",
 "./../../assets/images/nature/listeArticle/debardeur-yellow.jpg","./../../assets/images/nature/listeArticle/vestelegerenoire.jpeg", "./../../assets/images/nature/listeArticle/short-black.jpg",
 "./../../assets/images/nature/listeArticle/sweathsirt-green.jpg","./../../assets/images/nature/listeArticle/short-wild-ginger.jpg"];

constructor(private _articleservice : ConnexionSService) {}

ngOnInit () {
  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);


}
}
