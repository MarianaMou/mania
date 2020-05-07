import { Component,OnInit, Input } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import{SoumettreAvis} from './../soumettre-avis'


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
  public rating = 0;
  hoverState = 0;


  constructor(private _articleservice : ConnexionSService) {}



  newSoumettre_avisModel = new SoumettreAvis ("",null);

  onSubmit_avis() {

    console.log(this.newSoumettre_avisModel);
    this._articleservice.SoumettreAvis(this.newSoumettre_avisModel).subscribe(
      data=> window.alert(data.message),
      error=> console.error('erreur',error)
    )

  }


  updateRating(i) {
    this.rating = i;
this.newSoumettre_avisModel.nb_etoile = this.rating
  };
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


}



