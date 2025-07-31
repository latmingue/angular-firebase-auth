// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { NewAppointmentComponent } from './pages/new-appointment/new-appointment.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PatientDetailsComponent } from './pages/patient-details/patient-details.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/new', component: NewAppointmentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'patients/:id', component: PatientDetailsComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'not-authorized', component: NotAuthorizedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];