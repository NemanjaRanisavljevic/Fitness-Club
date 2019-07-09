import { TimetableService } from './timetable.service';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  animations: [
    trigger("fade", [
            transition('void => *', [
        animate(10000,style({opacity:0}))
      ])
    ])
    
  ]
})
export class TimetableComponent implements OnInit {

  constructor(private service:TimetableService) { }

  raspored;
  ngOnInit() {
    this.service.dohvatiRaspored().subscribe(
      Response => {
        console.log(Response);
        this.raspored = Response;
      },
      error => {
        console.log(error);
      }
    ); 
  }

}
