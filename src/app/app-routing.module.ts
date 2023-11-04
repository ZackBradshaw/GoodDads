import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { AdminWebComponent } from './admin-web/admin-web.component';
import { CompanionMobileComponent } from './companion-mobile/companion-mobile.component';
import { HomeComponent } from './companion-mobile/home/home.component';
import { SupportComponent } from './companion-mobile/support/support.component';
import { ScheduleComponent } from './companion-mobile/schedule/schedule.component';
import { MoreComponent } from './companion-mobile/more/more.component';
import { DashboardComponent } from './admin-web/dashboard/dashboard.component';
import { ParticipantsComponent } from './admin-web/participants/participants.component';
import { FormsComponent } from './admin-web/forms/forms.component';
import { QuizzesComponent } from './admin-web/quizzes/quizzes.component';
import { SurveysComponent } from './admin-web/surveys/surveys.component';
import { ReportingComponent } from './admin-web/reporting/reporting.component';
import { ResourcesComponent } from './admin-web/resources/resources.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminWebComponent, children: [
    {path:'', redirectTo:'/admin/dashboard', pathMatch: 'full'},
    {path:'dashboard', component: DashboardComponent},
    {path: 'participants', component: ParticipantsComponent},
    {path: 'forms', component: FormsComponent},
    {path: 'quizzes', component: QuizzesComponent},
    {path: 'surveys', component: SurveysComponent},
    {path: 'reports', component: ReportingComponent},
    {path: 'resources', component: ResourcesComponent}
  ]},
  {path: 'user', component: CompanionMobileComponent, children:[
    {path:'', redirectTo:'/user/home', pathMatch:'full' },
    {path:'home', component: HomeComponent},
    {path: 'support', component: SupportComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'more', component: MoreComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

