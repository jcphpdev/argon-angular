import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';

import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './public/login/login.component';
import { IconsComponent } from './admin/icons/icons.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { TableListComponent } from './admin/table-list/table-list.component';
import { TypographyComponent } from './admin/typography/typography.component';

const routes: Routes = [

  //Admin routes goes here 
  { 
    path: '', 
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'icons', component: IconsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'user', component: UserProfileComponent },
      { path: 'table', component: TableListComponent },
      { path: 'typography', component: TypographyComponent },
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
