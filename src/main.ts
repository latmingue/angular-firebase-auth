import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

const firebaseConfig = {
  // Remplacez par votre vraie configuration Firebase
  apiKey: "AIzaSyCMqww5BWmGgBsM22-YF7HC2RtI_bbbO5s",
  authDomain: "medical-appointment-app-e47e9.firebaseapp.com",
  projectId: "medical-appointment-app-e47e9",
  storageBucket: "medical-appointment-app-e47e9.firebasestorage.app",
  messagingSenderId: "792880299341",
  appId: "1:792880299341:web:d4e9b5cdcc2eb322b60b04",
  measurementId: "G-NGGN0NY1TE"
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
}).catch(err => console.error(err));