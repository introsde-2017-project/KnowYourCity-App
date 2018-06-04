import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token')!=null){
        if(this.userService.checkAuth()){
          return true;
        }
      }
      this.router.navigate(['/login']);
      return false;
    
  }
}
