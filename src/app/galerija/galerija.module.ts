import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalerijaRoutingModule } from './galerija-routing.module';
import { GalerijaComponent } from './galerija/galerija.component';

@NgModule({
  declarations: [GalerijaComponent],
  imports: [
    CommonModule,
    GalerijaRoutingModule
  ]
})
export class GalerijaModule { }
