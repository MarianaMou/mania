import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class commandeComponent implements OnInit {

  constructor(private _articleservice : ConnexionSService,private cookieService: CookieService) {

  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

}
