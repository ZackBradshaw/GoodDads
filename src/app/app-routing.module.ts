import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { AdminWebComponent } from './admin-web/admin-web.component';
import { CompanionMobileComponent } from './companion-mobile/companion-mobile.component';
import { HomeComponent } from './companion-mobile/home/home.component';
import { SupportComponent } from './companion-mobile/support/support.component';
import { ScheduleComponent } from './companion-mobile/schedule/schedule.component';
import { MoreComponent } from './companion-mobile/more/more.component';
import { QuizComponent } from './companion-mobile/schedule/quiz/quiz.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full' },
  {path: '', component: LoginComponent},
  {path: 'admin', component: AdminWebComponent},
  {path: 'user', component: CompanionMobileComponent, children:[
    {path:'', redirectTo:'/user/home', pathMatch:'full' },
    {path:'home', component: HomeComponent},
    {path: 'support', component: SupportComponent},
    {path: 'schedule', component: ScheduleComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'more', component: MoreComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

