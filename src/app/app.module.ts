import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, getApp, initializeApp, setLogLevel } from '@angular/fire/app';
import { HttpClientModule } from '@angular/common/http';
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

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { QuizComponent } from './companion-mobile/schedule/quiz/quiz.component';

import { environment } from '../environments/environment';
import { DashboardComponent } from './admin-web/dashboard/dashboard.component';
import { ParticipantsComponent } from './admin-web/participants/participants.component';
import { FormsComponent } from './admin-web/forms/forms.component';
import { QuizzesComponent } from './admin-web/quizzes/quizzes.component';
import { SurveysComponent } from './admin-web/surveys/surveys.component';
import { ReportingComponent } from './admin-web/reporting/reporting.component';
import { ResourcesComponent } from './admin-web/resources/resources.component';
import { SidebarComponent } from './admin-web/shared/sidebar/sidebar.component';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { ProfileComponent } from './admin-web/shared/sidebar/profile/profile.component';
import { SurveyViewComponent } from './admin-web/surveys/survey-view/survey-view.component';
import { NewSurveyComponent } from './admin-web/surveys/new-survey/new-survey.component';

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
    QuizComponent,
    DashboardComponent,
    ParticipantsComponent,
    FormsComponent,
    QuizzesComponent,
    SurveysComponent,
    ReportingComponent,
    ResourcesComponent,
    SidebarComponent,
    ProfileComponent,
    SurveyViewComponent,
    NewSurveyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    MatListModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
