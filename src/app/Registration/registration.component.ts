import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {NewClient} from './../new-client';
import { Validators } from '@angular/forms';
import {ConnexionSService} from './../Services/connexion-s.service'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']

})
export class registrationComponent {

  newClientModel = new NewClient("","","",null,null,"","","","");

  constructor(private _connexionService:ConnexionSService){

  }

  //la méthode onSubmit appelle connexionCli méthode en passant clientModel, c'est ce que l'utilisateur a entré
  onSubmit() {
    console.log(this.newClientModel);
    this._connexionService.InscriptionCli(this.newClientModel).subscribe(
      data=> window.alert(data.message),
      error=> console.error('erreur',error)
    )
  }
}
