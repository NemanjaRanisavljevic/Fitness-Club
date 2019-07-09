import { GalerijaService } from './galerija.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galerija',
  templateUrl: './galerija.component.html',
  styleUrls: ['./galerija.component.css']
})
export class GalerijaComponent implements OnInit {

  constructor(private service:GalerijaService) { }

  trenutna = 'gallery-big-6.jpg';
  
  Promeni(slika:any)
  {
    this.trenutna = slika;
  }


  slike;
  ngOnInit() {
    this.service.dohvatiSlike().subscribe(
      Response => {
        
        this.slike = Response;
      },
      error => {
        console.log(error);
      }
    ); 
  }

}
