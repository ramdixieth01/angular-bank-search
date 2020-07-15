import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanklistDetailGuard implements CanActivate {
  constructor(private router :Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let ifsc=+next.url[1].path;
    if(typeof(ifsc)!=='string'){
      alert("invalid ifsc");
      this.router.navigate(['/searchpage']);
      return false;
    }  
    return true;
  }
  
}
