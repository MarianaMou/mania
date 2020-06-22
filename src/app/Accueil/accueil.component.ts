import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {ConnexionSService} from './../Services/connexion-s.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class accueilComponent {
  public articles = [];
  constructor(private router: Router,private _articleservice : ConnexionSService){

  }

  //Pull
  onSubmit1() {
    this._articleservice.getAllpull().subscribe(data=> this.articles = data);
  }
  onSubmit2() {
    this._articleservice.getSweatshirt().subscribe(data=> this.articles = data);
  }
  onSubmit3() {
    this._articleservice.getPolaire().subscribe(data=> this.articles = data);
  }

  //Jupe
  onSubmitt1() {
    this._articleservice.getAlljupe().subscribe(data=> this.articles = data);
  }
  onSubmitt2() {
    this._articleservice.getPlissée().subscribe(data=> this.articles = data);
  }
  onSubmitt3() {
    this._articleservice.getCrayon().subscribe(data=> this.articles = data);
  }

  //Top
  onSubmittt1() {
    this._articleservice.getAlltop().subscribe(data=> this.articles = data);
  }
  onSubmittt2() {
    this._articleservice.getDébardeur().subscribe(data=> this.articles = data);
  }
  onSubmittt3() {
    this._articleservice.getBlouse().subscribe(data=> this.articles = data);
  }

  //Robe
  onSubmitttt1() {
    this._articleservice.getAllrobe().subscribe(data=> this.articles = data);
  }
  onSubmitttt2() {
    this._articleservice.getSoirée().subscribe(data=> this.articles = data);
  }
  onSubmitttt3() {
    this._articleservice.getEté().subscribe(data=> this.articles = data);
  }

  //Veste
  onSubmittttt1() {
    this._articleservice.getAllveste().subscribe(data=> this.articles = data);
  }
  onSubmittttt2() {
    this._articleservice.getHiver().subscribe(data=> this.articles = data);
  }
  onSubmittttt3() {
    this._articleservice.getLégère().subscribe(data=> this.articles = data);
  }
  //Pantalon
  onSubmitttttt1() {
    this._articleservice.getAllpantalon().subscribe(data=> this.articles = data);
  }
  onSubmitttttt2() {
    this._articleservice.getClassique().subscribe(data=> this.articles = data);
  }
  onSubmitttttt3() {
    this._articleservice.getShort().subscribe(data=> this.articles = data);
  }

}
