import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Client} from './../client';
import { Validators } from '@angular/forms';
import {ConnexionSService} from './../Services/connexion-s.service'
import { isString } from 'util';
import { RouterLink, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'; // cookies


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class loginComponent {
  private cookieValue : String;

  clientModel = new Client("","");
  Resultat: boolean = true; // variable où on stocke la réponse du serveur


  constructor(private _connexionService:ConnexionSService,private router: Router,private cookieService: CookieService){
  }


//la méthode onSubmit appelle connexionCli méthode en passant clientModel, c'est ce que l'utilisateur a entré
  onSubmit() {
    console.log(this.clientModel);
    this._connexionService.connexionCli(this.clientModel).subscribe(
      data=> this.getStatus(data.status),    // ici, on a la réponse du serveur, et cette réponse est envoyé dans une méthode
      error=> console.error('erreur',error),

    )


 if(this.Resultat==true) {  // ici, si c'est true, donc si les identifiants sont correctes, on entre dans la condition
   //Client.client = this.clientModel;


   window.alert("Voici les info sur le client "+Client.client.email+"ettt "+Client.client.password);
   
 this.router.navigate(['/catalogue']); // on ouvre une nouvelle page si c'est correcte
 //coookies, nous permet de stocker des informations pour pouvoir les utiliser plus tard
 this.cookieService.set('Email',<string>this.clientModel.email); //écrit la valeur dans le navigateur,c'est comme une base de donnée interne, prends 2 valeurs en parallèle
 this.cookieService.set('Password',<string>this.clientModel.password);

// this.cookieValue = this.cookieService.get('Email');// consulter dans le navigateur pour récuperer valeur, utiliser seulement quand on veut utiliser les valeurs dans les autres pages
 //this.cookieService.delete('Email');// effacer l'attribut email avec sa valeur; utiliser au moment du logout.
 // Principe : je me logue, réussi --> écrit les info dans le cookie (set), pour utiliser les info, partout à travers la page on utilise get,

 //Pour commander,ça rentre dans la méthode, check if existe utilisateur est dans les cookies, if n'existe pas,ouvre page de connexion.



  }

  }

  getStatus(Status:boolean) {  // dans cette méthode, on affecte la réponse à la nouvelle variable
 this.Resultat =<boolean>Status;
  }




  public ngOnInit(): void {


  }
}
