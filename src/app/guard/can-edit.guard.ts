import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanEditGuard implements CanActivate {

  constructor(private auth: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      return this.auth.user$.pipe(
        take(1),
        map(user => user && this.auth.canEdit(user) ? true : false),
        tap(isEditor => {
          if (!isEditor) {
            console.error('Access denied - Must have permission to edit content.');
          }
        })
      );
  }
}

