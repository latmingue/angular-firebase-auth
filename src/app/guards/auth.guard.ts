// src/app/guards/auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const expectedRole = route.data['role'] as 'admin' | 'doctor' | 'patient';

  return authService.getCurrentUser().pipe(
    map(user => {
      if (!user) {
        router.navigate(['/login']);
        return false;
      }
      if (expectedRole && user.role !== expectedRole) {
        router.navigate(['/not-authorized']);
        return false;
      }
      return true;
    })
  );
};