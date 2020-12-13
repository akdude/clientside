import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor( ) {
    
  }
  checkAuth() {
    if(!sessionStorage.getItem('name')) {
      window.location.href = '/login?msg=token';
    }
  }
  getUsername() {
    return sessionStorage.getItem('name');
  }

}
