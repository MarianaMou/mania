import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Client} from './../client';
import { Validators } from '@angular/forms';
import {ConnexionSService} from './../Services/connexion-s.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class loginComponent {

  clientModel = new Client("","");


  constructor(private _connexionService:ConnexionSService){

  }

//la méthode onSubmit appelle connexionCli méthode en passant clientModel, c'est ce que l'utilisateur a entré
  onSubmit() {
    console.log(this.clientModel);
    this._connexionService.connexionCli(this.clientModel).subscribe(
      data=> window.alert(data.message),
      error=> console.error('erreur',error)
    )
  }

}
