import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from './../client';
import{NewClient} from './../new-client';
import{Articles} from './../Catalogue/catalogue';
import{Commentaires} from './../Article/commentaire';
import {Observable} from 'rxjs';
import{SoumettreAvis} from './../soumettre-avis';

const Options ={
headers : new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class ConnexionSService {

  _url='http://localhost:3000/api/';
  constructor(private http:HttpClient) {}

//ici on fait la requête http et envoie les données au serveur
    connexionCli(client:Client) {
    return this.http.post<any>(this._url+'login',client);
    }

    InscriptionCli(newCli:NewClient) {
      return this.http.post<any>(this._url+'register',newCli);
    }

    getArticle (): Observable <Articles[]>{
      return this.http.get<Articles[]>(this._url+'catalogue');
    }
    getCommentaire (): Observable <Commentaires[]>{
      return this.http.get<Commentaires[]>(this._url+'commentaire');
    }

SoumettreAvis(avis:SoumettreAvis) {
  return this.http.post<any>(this._url+'soumettre_avis',avis);
}

}
