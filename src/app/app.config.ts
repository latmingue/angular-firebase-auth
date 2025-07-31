// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Initialisation de Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    // Fournir le service d'authentification Firebase
    provideAuth(() => getAuth()),
  ],
};