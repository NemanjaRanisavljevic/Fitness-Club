import { HomeService } from './home.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, animate, style, state, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("fade", [
     
      transition('void => *', [
        style({color:'blue',opacity: 0}),
        animate(9000)
      ])
    ]      
    )
  ]
})
export class HomeComponent implements OnInit {

  constructor(private serive:HomeService) { }

  vesti;

  ngOnInit() {
    this.serive.dohvatiVesti().subscribe(
      Response => {
        
        this.vesti = Response;
      },
      error => {
        console.log(error);
      }

    ); 
  }

  
  

}
