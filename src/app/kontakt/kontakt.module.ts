import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    KontaktRoutingModule
  ]
})
export class KontaktModule { }
