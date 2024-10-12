import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HandleToastService } from '../shared/handle-toast.service';

export const scoreGuard: CanActivateFn = (route, state) => {
  const handlerToastService = inject(HandleToastService);
  const score = Number(route.paramMap.get('score'));
  const username = route.paramMap.get('username');

  if(score < 30 && username !== 'santiagoae') {
    handlerToastService.showToast({
      alertType: 'error',
      message: 'Necesitas ser santiagoae o tener al menos un puntaje de 30 para acceder a esta página'
    });
    return false;
  };

  handlerToastService.showToast({
    alertType: 'success',
    message: 'Bienvenido!! a mi perfil, no se porque el guard tenia que validar menos de 30 en el score, pero puedes seguir navegando  desde aqui!!'
  });
  return true;
};
