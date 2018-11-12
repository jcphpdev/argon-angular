import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './_layout/public-layout/public-layout.component';
import { HomeComponent } from './admin/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { LoginComponent } from './public/login/login.component';
import { FooterComponent } from './_layout/footer/footer.component';
import { NavbarPublicComponent } from './_layout/navbar-public/navbar-public.component';
import { NavbarAdminComponent } from './_layout/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './_layout/sidebar-admin/sidebar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FooterComponent,
    NavbarPublicComponent,
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
