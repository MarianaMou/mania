import { Component, OnInit} from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';

import{EmailCli} from './EmailCli'
import{Infomodifie} from './Infomodifie'

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class profilComponent implements OnInit {
  public nameValue : String ;
  public firstnameValue: String;
  public telValue : String;
  public emailValue : String;
  public infoClient = [];

  newInfo = new Infomodifie("","","",null,null,"","","","");


  constructor(private _articleservice : ConnexionSService, private cookieService: CookieService,public dialog: MatDialog) {
  console.log(this.newInfo.nom)
  }
  EmailClient = new EmailCli("");


  ngOnInit() {
    /*this.nameValue = this.cookieService.get('Nom');
    this.firstnameValue = this.cookieService.get('Prenom');
    this.telValue = this.cookieService.get('Telephone');*/

    this.emailValue = this.cookieService.get('Email');
    this.EmailClient.Email=this.emailValue;

    this._articleservice.getInfoClient(this.EmailClient)
    .subscribe(data => this.infoClient = data);

  }
  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  onSubmit() {
    this._articleservice.UpdateInfo(this.newInfo).subscribe(
      data=> window.alert(data.message),
      error=> console.error('erreur',error)
    )
  }
  modificationPrenom(prenom:String){
   this.newInfo.prenom=prenom
  }
  modificationNom(nom:String){
   this.newInfo.nom=nom
  }
  modificationRue(rue:String){
   this.newInfo.rue=rue
  }
  modificationNumRue(num_rue:number){
this.newInfo.num_rue=num_rue
  }
  modificationCP(CP:number){
this.newInfo.code_postal=CP
  }
  modificationVille(ville:String){
this.newInfo.ville=ville
  }
  modificationEmail(email:String){
this.newInfo.email=email
  }
  modificationTel(tel:String){
this.newInfo.tel=tel
  }
  modificationBancaire(bancaire:String){
    console.log(bancaire)
this.newInfo.bancaire=bancaire
  }

}



