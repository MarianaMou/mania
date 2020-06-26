import { Component } from '@angular/core';
import {  Input } from '@angular/core';
import {OnInit} from '@angular/core';
import {ConnexionSService} from './../Services/connexion-s.service';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']


})
export class catalogueComponent implements OnInit{
  public id: string;
  public sub: any;
public articles = [];
public AS : any;
public cookiepanier: string;


constructor(private _articleservice : ConnexionSService,private cookieService: CookieService, private route: ActivatedRoute) {

}





ngOnInit () {
  this._articleservice.getArticle()
  .subscribe(data => this.articles = data);

   this.cookiepanier= this.cookieService.get('PanierListe')
   this.cookieService.set('PanierListe', this.cookiepanier);

  this.sub = this.route.params.subscribe(params => {
    this.id = params['id']; // (+) converts string 'id' to a number
switch(this.id) {
case 'Pull' : this._articleservice.getAllpull().subscribe(data=> this.articles = data);
break;
case 'Sweatshirt': this._articleservice.getSweatshirt().subscribe(data=> this.articles = data);
break;
case 'Polaire': this._articleservice.getPolaire().subscribe(data=> this.articles = data);
break;
case 'Jupe': this._articleservice.getAlljupe().subscribe(data=> this.articles = data);
break;
case 'JupePlissee': this._articleservice.getPlissée().subscribe(data=> this.articles = data);
break;
case 'JupeCrayon': this._articleservice.getCrayon().subscribe(data=> this.articles = data);
break;
case 'Top': this._articleservice.getAlltop().subscribe(data=> this.articles = data);
break;
case 'Debardeur': this._articleservice.getDébardeur().subscribe(data=> this.articles = data);
break;
case 'Blouse': this._articleservice.getBlouse().subscribe(data=> this.articles = data);
break;
case 'Robe': this._articleservice.getAllrobe().subscribe(data=> this.articles = data);
break;
case 'RobeSoiree': this._articleservice.getSoirée().subscribe(data=> this.articles = data);
break;
case 'RobeEte': this._articleservice.getEté().subscribe(data=> this.articles = data);
break;
case 'Veste': this._articleservice.getAllveste().subscribe(data=> this.articles = data);
break;
case 'VesteHiver': this._articleservice.getHiver().subscribe(data=> this.articles = data);
break;
case 'VesteLegere': this._articleservice.getLégère().subscribe(data=> this.articles = data);
break;
case 'Pantalon': this._articleservice.getAllpantalon().subscribe(data=> this.articles = data);
break;
case 'PantalonClassique': this._articleservice.getClassique().subscribe(data=> this.articles = data);
break;
case 'Short':   this._articleservice.getShort().subscribe(data=> this.articles = data);
break;

}



 });

}
ngOnDestroy() {
  this.sub.unsubscribe();
}

}
