import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';

import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './public/login/login.component';

const routes: Routes = [

  //Admin routes goes here 
  { 
    path: '', 
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'home', component: HomeComponent },
    ]
  },

  // App routes goes here here
  { 
    path: '',
    component: PublicLayoutComponent, 
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },

  //no layout routes
  //{ path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
