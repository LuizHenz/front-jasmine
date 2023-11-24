import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthTokenService } from '../shared/auth-token.service';

export const rotaguardGuard: CanActivateFn = (route, state) => {

  let authToken = inject(AuthTokenService);
  let roteador = inject(Router);

  if(authToken.getToken() == null){
    roteador.navigate(['/login']);
    return false;
  }else{
    return true;
  }
};
