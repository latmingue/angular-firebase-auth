// login.component.ts - Solution avec async/await
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async login() {
    if (!this.email || !this.password) {
      console.error('Email et mot de passe requis');
      return;
    }

    this.isLoading = true;

    try {
      // Utilisation d'async/await au lieu de .subscribe()
      const result = await this.authService.login(this.email, this.password);
      console.log('Connexion réussie:', result);
      this.router.navigate(['/dashboard']); // ou votre route de destination
    } catch (error: any) { // Type explicite pour éviter l'erreur TS7006
      console.error('Erreur de connexion:', error);
      // Gestion d'erreur appropriée
      if (error.code === 'auth/user-not-found') {
        console.error('Utilisateur non trouvé');
      } else if (error.code === 'auth/wrong-password') {
        console.error('Mot de passe incorrect');
      } else {
        console.error('Erreur de connexion:', error.message);
      }
    } finally {
      this.isLoading = false;
    }
  }
}