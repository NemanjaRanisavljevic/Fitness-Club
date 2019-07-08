import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css']
})
export class KontaktComponent implements OnInit {

  constructor() { }

  sucessed = false;

  onSubmit(form: NgForm)
  {
    this.sucessed = true;
    
  }

  ngOnInit() {
  }

}
