import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalerijaComponent } from './galerija/galerija.component';

const routes: Routes = [
  {
    path: '',
    component: GalerijaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalerijaRoutingModule { }
