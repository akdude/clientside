import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor( ) {
    
  }
  // Checking for any user activities.
  checkAuth() {
    if(!sessionStorage.getItem('name')) {
      window.location.href = '/login?msg=token';
      // Redirected to login page when there is no username or inactivity.
    }
  }

  //getting username from session storage
  getUsername() {
    return sessionStorage.getItem('name');
  }

}
