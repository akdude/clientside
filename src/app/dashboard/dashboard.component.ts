import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { MessageService } from '../message.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {
    constructor(
        private auth : AuthenticationService,
        private _fb: FormBuilder,
        private toastr: ToastrService,
        public dialog: MatDialog,
        public button : MatButtonModule,
        private messageService: MessageService,
        ) {
        auth.checkAuth();
    }
    mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
    submitted : boolean = false;
    badgeForm: FormGroup;
    invalidDate : boolean = false;
    username : string;

  todayNumber: number = Date.now();
  orders: any[] = [];

	ngOnInit(): void {
      this.createBadgeFormInit();
  }

  //Initializing Badgeform for validation
  createBadgeFormInit() {
    this.username = this.auth.getUsername(); 
    this.badgeForm = this._fb.group({
      'name': [this.username, [Validators.required]],
      'phone': ['', [Validators.required, Validators.pattern(this.mobnumPattern)]],
      'date': ['', [Validators.required]],
      'type': ['Mobile', [Validators.required]]
    });

  }
    get f() { return this.badgeForm.controls; }

    onSubmit() {
      this.submitted = true;
        let currentdate = new Date();
        let deliverydate = new Date(this.badgeForm.value['date']);
        if(deliverydate < currentdate ) {
          this.toastr.warning('Invalid Delivery Date', 'Delivery Starts from Tomorrow');
          this.invalidDate = true;
          return;
        }
        if (!this.badgeForm.valid) {
          return;
        }
        let orderedBy = this.username;
        let product = this.badgeForm.value['type'];
        let message = orderedBy+' have placed an order for a '+product+' on '+new Date().toLocaleString();
        this.messageService.send({text: message, user: '', time:''});

        //Sending Realtime order notification to all the users in chatroom
        this.addEntry(orderedBy, product);
        this.toastr.success('Order placed successfully');
    }
    addEntry(ordered_by, product) {
      // Parse any JSON previously stored in allEntries
      var entry = {
          "name": ordered_by,
          "product": product,
          "time" : this.todayNumber
      };
      // Save allEntries back to local storage
      var allEntries = JSON.parse(localStorage.getItem("allEntries")) || []; 
      allEntries.push(entry); 
      localStorage.setItem('allEntries', JSON.stringify(allEntries));

  };
    openDialog() {
      const dialogRef = this.dialog.open(MessagesComponent,{ disableClose: true });
    }
    closeDialog() {
      this.dialog.closeAll();
    }
      
}