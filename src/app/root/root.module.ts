import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootRoutingModule } from './root-routing.module';
import { RootComponentComponent } from './root-component/root-component.component';

@NgModule({
  declarations: [RootComponentComponent],
  imports: [
    CommonModule,
    
    RootRoutingModule
  ]
})
export class RootModule { }
