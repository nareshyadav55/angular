import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuardGuard implements CanActivate {
  constructor() { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let componentName = route.data["roles"];
    console.log(componentName)
    let userParamName = JSON.parse(sessionStorage.getItem('currentUser')).paramName;
    console.log(userParamName)
    if(componentName === 'manageNational' && userParamName === 'NLMA') {
      return true;
    }
    else if (componentName === 'manageStateUser' && (userParamName === 'NLMA' || userParamName === 'SLMA')) {
      return true;
    }
    else if (componentName === 'manageDistUser' && (userParamName === 'NLMA' || userParamName === 'SLMA' || userParamName === 'DLMA')) {
      return true;
    }
    else if (componentName === 'manageBlockUser' && (userParamName === 'NLMA' || userParamName === 'SLMA' || userParamName === 'DLMA')) {
      return true;
    }
    else if (componentName === 'manageSoUser' && (userParamName === 'NLMA' || userParamName === 'SLMA' || userParamName === 'DLMA')) {
      return true;
    }
    else if (componentName === 'stateChecklist' && userParamName === 'SLMA') {
      return true;
    }
    else if (componentName === 'stateMonitoring' && userParamName === 'SLMA') {
      return true;
    }
    else if (componentName === 'stateNodal' && userParamName === 'SLMA') {
      return true;
    }
    else if (componentName === 'stateTraining' && userParamName === 'SLMA') {
      return true;
    }
    else if (componentName === 'districtCoordinator' && userParamName === 'DLMA') {
      return true;
    }
    else if (componentName === 'districtTraining' && userParamName === 'DLMA') {
      return true;
    }
    else if (componentName === 'reports' && (userParamName === 'NLMA' || userParamName === 'SLMA') ) {
      return true;
    }
    else {
      return false;
    }
  }
}
