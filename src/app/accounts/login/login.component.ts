import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  userData: any = [];
  errorMessage : String = '';

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder, 
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.errorMessage =  params['msg']; 
    });
    if (this.errorMessage == 'token') {
      this.toastr.warning('Enter Name to continue', 'Sorry');
    }
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { 
    return this.loginForm.controls; 
  }

  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    sessionStorage.setItem("name", this.loginForm.value['name']);
    this.router.navigate(['/dashboard']);
  }

}
