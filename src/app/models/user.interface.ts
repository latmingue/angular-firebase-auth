// src/app/models/user.interface.ts
export interface User {
  uid: string; // ID Firebase unique
  email: string; // Email de l'utilisateur
  role: 'admin' | 'doctor' | 'patient'; // Rôle de l'utilisateur
  displayName?: string; // Nom affiché (optionnel)
}