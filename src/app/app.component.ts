import { Component, OnInit } from '@angular/core';
import {ConnexionSService} from './Services/connexion-s.service';
import { CookieService } from 'ngx-cookie-service';
import {ChangeDetectorRef} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public cookieValue : String ;
  public Bool :boolean;
  title = 'mania';


  constructor(private _articleservice : ConnexionSService,private cookieService: CookieService) {

  }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('Connecte');
  this.Bool = (this.cookieValue === 'true')

  }
  Deconnexion() {
    this.cookieService.delete('Connecte')
    this.Bool = (this.cookieValue === 'false')
  }




}
