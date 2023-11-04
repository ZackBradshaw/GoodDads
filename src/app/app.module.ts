import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './shared/login/login.component';
import { AdminWebComponent } from './admin-web/admin-web.component';
import { CompanionMobileComponent } from './companion-mobile/companion-mobile.component';
import { NavigationComponent } from './companion-mobile/shared/navigation/navigation.component';
import { HomeComponent } from './companion-mobile/home/home.component';
import { SupportComponent } from './companion-mobile/support/support.component';
import { ScheduleComponent } from './companion-mobile/schedule/schedule.component';
import { MoreComponent } from './companion-mobile/more/more.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

import { environment } from '../environments/environment';
import { AuthComponent } from './shared/auth/auth.component';
=======

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';



import { FormsModule } from '@angular/forms';
>>>>>>> 7a557d29ea89352bab467b182b9d11de1c03687c
import { DashboardComponent } from './admin-web/dashboard/dashboard.component';
import { ParticipantsComponent } from './admin-web/participants/participants.component';
import { FormsComponent } from './admin-web/forms/forms.component';
import { QuizzesComponent } from './admin-web/quizzes/quizzes.component';
import { SurveysComponent } from './admin-web/surveys/surveys.component';
import { ReportingComponent } from './admin-web/reporting/reporting.component';
import { ResourcesComponent } from './admin-web/resources/resources.component';
import { SidebarComponent } from './admin-web/shared/sidebar/sidebar.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminWebComponent,
    CompanionMobileComponent,
    NavigationComponent,
    HomeComponent,
    SupportComponent,
    ScheduleComponent,
    MoreComponent,
    AuthComponent,

    DashboardComponent,
    ParticipantsComponent,
    FormsComponent,
    QuizzesComponent,
    SurveysComponent,
    ReportingComponent,
    ResourcesComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
=======
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule
>>>>>>> 7a557d29ea89352bab467b182b9d11de1c03687c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
