import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { KontaktRoutingModule } from './kontakt-routing.module';
import { KontaktComponent } from './kontakt/kontakt.component';

@NgModule({
  declarations: [KontaktComponent],
  imports: [
    CommonModule,
    KontaktRoutingModule,
    FormsModule
  ]
})
export class KontaktModule { }
