import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ICanDeactivate {
  canComponentBeDeactivated(): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<ICanDeactivate> {
  canDeactivate(
    component: ICanDeactivate): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canComponentBeDeactivated ? component.canComponentBeDeactivated() : true;
  }
  
}
