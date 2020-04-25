import { Component } from '@angular/core';

@Component({
  selector: 'app-soumettrecommentaire',
  templateUrl: './soumettre-commentaire.component.html'
})
export class soumettrecommentaireComponent {
nouveaucom = 'Rien';
entreecom = '';
onAjoutCom (){
this.nouveaucom = this.entreecom;
}
}
