import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { LoginService } from '../services/login/login.js';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);

  if (loginService.user() == undefined) {
    return loginService.getUser().pipe(
      map((_) => true),
      catchError((_) => router.navigate(['login']))
    );
  }

  if (!loginService.user()) {
    router.navigate(['login']);
  }

  return true;
};
