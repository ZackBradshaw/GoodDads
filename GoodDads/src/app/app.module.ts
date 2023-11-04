import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminWebComponent } from './admin-web/admin-web.component';
import { CompanionMobileComponent } from './companion-mobile/companion-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminWebComponent,
    CompanionMobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
