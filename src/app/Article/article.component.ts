import { Component,OnInit, OnDestroy } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { ActivatedRoute } from '@angular/router';
import{SoumettreAvis} from './../soumettre-avis'
import{Commentaires} from './commentaire'
import{CommentNumRef} from './CommentNumRef'


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],


})
export class articleComponent implements OnInit,OnDestroy{
  id: String;
  private sub: any;
  public articles=[]
  public commentaires = [];
  public affichercommentaires=[];
  stars = [1, 2, 3, 4, 5];
  public rating = 0;
  hoverState = 0;


  constructor(private _articleservice : ConnexionSService,private route: ActivatedRoute) {}



  newSoumettre_avisModel = new SoumettreAvis (null,"","",null);
  listCommentaire = new CommentNumRef("");


  onSubmit_avis() {
   // this.newSoumettre_avisModel.num_client=...
   this.newSoumettre_avisModel.num_reference=this.id,
    console.log(this.newSoumettre_avisModel);
    this._articleservice.SoumettreAvis(this.newSoumettre_avisModel).subscribe( //on soumet l'avis
      data=> window.alert(data.message),
      error=> console.error('erreur',error)
    )

  }


  updateRating(i) {
    this.rating = i;
this.newSoumettre_avisModel.nb_etoile = this.rating //on met le nombre d'étoiles
  };
  ngOnInit () {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      this.listCommentaire.num_reference= this.id //on fixe le numéro de refrence du commentaire de l'article à afficher



   });



  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

  this._articleservice.getCommentaire(this.listCommentaire)
      .subscribe(data => this.commentaires = data);



  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  enter(i) {
    this.hoverState = i;
  }

  leave() {
    this.hoverState = 0;
  }


}



