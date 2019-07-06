
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponentComponent } from './root/root-component/root-component.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { Routes, RouterModule } from '@angular/router';
// import { RootModule } from './root/root.module';
// import { HomeModule } from './home/home.module';

const routes : Routes = [
  {
    path : '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: RootComponentComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'  
      }
    ]
  }
]


@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
