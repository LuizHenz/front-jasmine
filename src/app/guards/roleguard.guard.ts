import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../shared/auth-token.service';
import { inject } from '@angular/core';

export const roleguardGuard: CanActivateFn = (route, state) => {

  let authToken = inject(AuthTokenService);
  let roteador = inject(Router);

  if(!authToken.hasPermision('ADMIN')){
    roteador.navigate(['/admin']);
    return false;
  }else{
    return true;
  }

  return true;
};
