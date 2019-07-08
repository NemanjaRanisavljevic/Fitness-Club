
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { RootComponentComponent } from './root/root-component/root-component.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TimetableComponent } from './timetable/timetable/timetable.component';





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
  },

  {
    path : 'timetable',
    redirectTo: 'timetable',
    pathMatch: 'full'
  },
  {
    path: 'timetable',
    component: RootComponentComponent,
    children: [
      {
        path: '',
        loadChildren: './timetable/timetable.module#TimetableModule'  
      }
    ]
  },

  {
    path : 'galerija',
    redirectTo: 'galerija',
    pathMatch: 'full'
  },
  {
    path: 'galerija',
    component: RootComponentComponent,
    children: [
      {
        path: '',
        loadChildren: './galerija/galerija.module#GalerijaModule'  
      }
    ]
  },
  
  {
    path : 'kontakt',
    redirectTo: 'kontakt',
    pathMatch: 'full'
  },
  {
    path: 'kontakt',
    component: RootComponentComponent,
    children: [
      {
        path: '',
        loadChildren: './kontakt/kontakt.module#KontaktModule'  
      }
    ]
  },

 
]


@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
