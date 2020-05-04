import { Component, OnInit } from '@angular/core';
import {CatalogueService} from './catalogue.service'
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',

})

export class catalogueComponent implements OnInit {
public articles = [];
public imageurl;
constructor(private sanitizer: DomSanitizer, private _catalogueService: CatalogueService) {}
ngOnInit(){

  this._catalogueService.getArticles()
  .subscribe(data =>{
    this.articles = data
    let TYPED_ARRAY = new Uint8Array(this.articles);
    var STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
    let base64String = btoa(STRING_CHAR);
    this.imageurl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64String);

  })


    //this.articles = data);
}

}
