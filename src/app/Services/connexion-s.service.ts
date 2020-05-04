import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from './../client';
import{NewClient} from './../new-client';
import{Cataloguelist} from './../cataloguelist';
import {Observable} from 'rxjs/Observable';


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
    getArticle (): Observable <Cataloguelist[]>{
      return this.http.get<Cataloguelist[]>(this._url+'catalogue');
    }

}
