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














}
