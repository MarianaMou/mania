import { Component,OnInit, Input } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class articleComponent implements OnInit{
  public articles=[]
  public commentaires = [];
  public affichercommentaires=[];
  stars = [1, 2, 3, 4, 5];
  rating = 0;
  hoverState = 0;


  constructor(private _articleservice : ConnexionSService) {}

  ngOnInit () {

  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

  this._articleservice.getCommentaire()
  .subscribe(data => this.commentaires = data);


  }
  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }

  updateRating(i) {
    this.rating = i;
  }
}



