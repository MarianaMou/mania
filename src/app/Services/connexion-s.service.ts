import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Client} from './../client';
import{NewClient} from './../new-client';
import{Articles} from './../Catalogue/catalogue';
import{Commentaires} from './../Article/commentaire';
import {Observable} from 'rxjs';
import{SoumettreAvis} from './../soumettre-avis';
import{articlegroupe} from '../Accueil/articlegroupe';
import { CommentNumRef } from '../Article/CommentNumRef';
import {Info} from '../Profil/infoCli'
import{EmailCli} from './../Profil/EmailCli'
import{Commandes} from '../Commande/Commandes'
import{Infomodifie} from './../Profil/Infomodifie'
import{ContenuPanier} from './../Article/contenuPanier'
import{TableCommande} from './../Panier/EmailClient'
import{NewMdp} from './../my-dialog/MotPasse'


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

    UpdateMdp(mdp:NewMdp) {
      return this.http.post<any>(this._url+'mdp',mdp);
    }
    InscriptionCli(newCli:NewClient) {
      return this.http.post<any>(this._url+'register',newCli);
    }
    getListePanier(liste:TableCommande) {
      return this.http.post<any>(this._url+'listeArticle',liste);
    }

    getArticle (): Observable <Articles[]>{
      return this.http.get<Articles[]>(this._url+'catalogue');
    }
    UpdateInfo(Cli:Infomodifie) {
      return this.http.post<any>(this._url+'infoU',Cli);
    }
    getPanier(Panier:ContenuPanier) {
      return this.http.post<any>(this._url+'panier',Panier);
    }
    DeletePanier(email:TableCommande) {
      return this.http.post<any>(this._url+'deleteNow',email);
    }
    PasseCommande(email:TableCommande){
      return this.http.post<any>(this._url+'payer',email);
    }
   //Pull
    getAllpull (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'pull');
    }
    getSweatshirt() : Observable <articlegroupe[]> {
      return this.http.get<articlegroupe[]>(this._url+'sweatshirt');
    }
    getPolaire() : Observable <articlegroupe[]> {
      return this.http.get<articlegroupe[]>(this._url+'polaire');
    }

    //Jupe
    getAlljupe (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'jupe');
    }
    getPlissée() : Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'plisse');
    }
    getCrayon() : Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'crayon');
    }

    //Top
    getAlltop (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'top');
    }
    getDébardeur (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'debardeur');
    }
    getBlouse (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'blouse');
    }

    //Robe
    getAllrobe  (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'robe');
    }
    getSoirée  (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'soire');
    }
    getEté  (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'ete');
    }

    //Veste
    getAllveste  (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'veste');
    }
    getHiver (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'vestehiver');
    }
    getLégère (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'vestelegere');
    }

    //Pantalon
    getAllpantalon  (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'pantalon');
    }
    getClassique (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'classique');
    }
    getShort (): Observable <articlegroupe[]>{
      return this.http.get<articlegroupe[]>(this._url+'short');
    }
    getCommentaire(comment:CommentNumRef) {
      return this.http.post<any>(this._url+'commentaire',comment);
      }

    getListeCommandes(cli:EmailCli){
      return this.http.post<any>(this._url+'commande',cli);
    }

SoumettreAvis(avis:SoumettreAvis) {
  return this.http.post<any>(this._url+'soumettre_avis',avis);
}

  getInfoClient(Email:EmailCli){
    return this.http.post<any>(this._url+'client',Email);
  }

}
