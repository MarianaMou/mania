import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {NewMdp} from './MotPasse'

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {
 emailValue = "";
 mdp = new NewMdp("","","")
 Resultat = false;
  constructor(public dialogRef:MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA)public data:any,private _articleservice : ConnexionSService, private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  save() {
    this.emailValue = this.cookieService.get('Email');
    this.mdp.email=this.emailValue;

    this._articleservice.UpdateMdp(this.mdp)
    .subscribe(
      data=> this.getStatus(data.status),    // ici, on a la réponse du serveur, et cette réponse est envoyé dans une méthode
     error=> console.error('erreur',error),
    );



  }

  onCondition(){
    if(this.Resultat==true) {
      window.alert("Mot de passe modifié avec succès")
      this.dialogRef.close();
    }
    else {
      window.alert("Mot de passe incorrect")
    }
  }
 return(){
  this.dialogRef.close();
 }
 getStatus(Status:boolean) {  // dans cette méthode, on affecte la réponse à la nouvelle variable
  console.log(Status);
this.Resultat =<boolean>Status;
this.onCondition();
}
}
