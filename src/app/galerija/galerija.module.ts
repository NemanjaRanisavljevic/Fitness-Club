import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerijaRoutingModule } from './galerija-routing.module';
import { GalerijaComponent } from './galerija/galerija.component';

@NgModule({
  declarations: [GalerijaComponent],
  imports: [
    CommonModule,
    GalerijaRoutingModule,
    FormsModule
  ]
})
export class GalerijaModule { }
