import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalerijaService {

  constructor(private service : HttpClient){}

  dohvatiSlike()
  {
    var slike = this.service.get("http://localhost:4200/assets/json/galerija.json");
    return slike;
  }
}
