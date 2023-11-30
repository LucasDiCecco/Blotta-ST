// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    const password: string | null = prompt('Ingrese la contraseña:');

    if (password !== null && this.authService.authenticate(url, password)) {
      return true;
    } else {
      this.router.navigate(['/']); // Puedes redirigir a una página de error o a la página principal
      return false;
    }
  }
}