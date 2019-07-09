import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private service : HttpClient){}

  dohvatiRaspored()
  {
    var raspored = this.service.get("http://localhost:4200/assets/json/timetable.json");
    return raspored;
  }
}
