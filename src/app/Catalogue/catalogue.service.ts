import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Articles} from './catalogue';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private urlarticles: string ="http://localhost:3000/Article";

  constructor(private http: HttpClient) { }
getArticles(): Observable<Articles[]>{
  return this.http.get<Articles[]>(this.urlarticles);
}

}
