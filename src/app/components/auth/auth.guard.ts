import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  createUrlTreeFromSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return true;
  // }
  // canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   return this.authService
  //     .isAuthenticated()
  //     .pipe(
  //       map((isAuthenticated) =>
  //       isAuthenticated ? true : createUrlTreeFromSnapshot(next, ['/', 'login'])
  //       )
  //     );
  // }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ): boolean {
  //   let isLoggedIn = this.authService.isAuthenticated();
  //   if (isLoggedIn) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/contact']);
  //   }
  //   return false;
  // }
}
