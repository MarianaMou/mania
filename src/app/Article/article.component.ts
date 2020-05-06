import { Component,OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class articleComponent implements OnInit{
  public articles=[]
  public commentaires = [];


  constructor(private _articleservice : ConnexionSService) {}

  ngOnInit () {
    this._articleservice.getCommentaire()
  .subscribe(data => this.commentaires = data);

  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

  }
}
