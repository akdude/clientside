import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { concatMap, retryWhen, timeout, catchError, mergeMap } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { AdminUser } from 'src/app/models/admin-user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageKeys } from 'src/app/enums';
import { apiUrls } from 'src/app/api-urls';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public currenturl = null;
	private _adminUser: AdminUser;
    private _httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };
	fixedSidebar: boolean = false;
	smallSidebar: boolean = false;
	settingsOpen: boolean = false;

	sidebarColor: string = 'bg-black-300';

	colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
    sizes = ["mini", "small", "normal", "large"];

    onText = "On";
    offText = "Off";
    onColor = "green";
    offColor = "red";
    size = "normal";

	// For Sidebar BG
	bgBlack300: boolean = true;
	bgPrimary: boolean = false;
	bgLight: boolean = false;
	bgDanger: boolean = false;
	bgSuccess: boolean = false;
	bgWarning: boolean = false;

	innerWidth: any;
	
	isLoginPage: boolean = false;
	validPage: boolean = true;
	loading : 'asdasd';
	ngOnInit() {
		
	}

    // constructor(
	// 	public _http: HttpClient,
	// 	private _api: ApiDataServices,
	// 	private settingsService: SettingsService,
	// 	private router: Router
	// )  {
    //     this._adminUser = new AdminUser();
    //     this._adminUser = JSON.parse(localStorage.getItem(LocalStorageKeys.AdminUser));
    // }

	// ngOnInit() {
	// 	this.currenturl = window.location.pathname;
	// 	this.validPage = false;
	// 	if(this.currenturl == "/accounts/login") {
	// 		this.validPage = true;
	// 		this.isLoginPage = true;
	// 	} else {
	// 		let data = {
	// 			page : 1,
	// 			pageLength : 1
	// 		  }
	// 		this._api.postApiData(apiUrls.userList, data).pipe().subscribe(
	// 			(data: any) => {
	// 				this.validPage = true;
	// 				setTimeout(() => {
	// 					var dropdown = document.getElementsByClassName("dropdown-btn");
	// 					var i;
	// 					var temp;
	// 					var temp_id; 
				
	// 					for (i = 0; i < dropdown.length; i++) {
	// 						dropdown[i].addEventListener("click", function() {
	// 							var id = this.getAttribute('data-id');
	// 							let element = document.querySelector(".d_"+id);
	// 							if(element.classList.contains("active")){
	// 								temp = 1;
	// 								temp_id = id;
	// 							} else {
	// 								temp_id = 0;
	// 							}
								
	// 							var dropdown_2 = document.getElementsByClassName("dropdown-btn");
	// 							var dropdownContainer = document.getElementsByClassName("dropdown-container");
	// 							var j;
	// 							var k;
								
	// 							for(j=0; j < dropdown_2.length; j++) {
	// 								if (dropdown_2[j].classList.contains("active")) {
	// 									dropdown_2[j].classList.toggle("active");
	// 								}
	// 							}
	
	// 							for(k=0; k < dropdownContainer.length; k++) {
	// 								(<HTMLElement>dropdownContainer[k]).style.display = "none";
	// 							}
								
	// 							this.classList.toggle("active");
	// 							var dropdownContent = this.nextElementSibling;
								
	// 							if (dropdownContent.style.display === "block") {
	// 								dropdownContent.style.display = "none";
	// 							} else {
	// 								dropdownContent.style.display = "block";
	// 							}
	// 							if (id === temp_id) {
	// 								document.querySelector(".d_"+temp_id).classList.remove('active');
	// 								(<HTMLElement>document.querySelector(".d_"+temp_id).nextElementSibling).style.display = "none";
	// 							}
	// 						});
	// 					}
	// 				  }, 1000);
					
	// 			},
	// 			error => {
	// 			}
	// 		  );
				
	// 	}
	// }
	// ngAfterViewInit() {
	// 	let x = document.querySelectorAll("a[href='"+this.currenturl+"']");
	// 	if (x[0] && x[0].parentElement.previousElementSibling) {
	// 		x[0].parentElement.previousElementSibling.classList.add('active');
	// 		x[0].parentElement.style.display = 'block';
	// 	}
		
	// }
	// change (url) {
	// 	this.currenturl = url;
	// 	var dropdown = document.getElementsByClassName("dropdown-btn");
	// 	var j;
	// 	for(j=0; j < dropdown.length; j++) {
	// 		if (dropdown[j].classList.contains("active")) {
	// 			dropdown[j].classList.remove("active");
	// 			(<HTMLElement>dropdown[j].nextElementSibling).style.display = "none";
	// 		}
	// 	}
	// 	let x = document.querySelectorAll("a[href='"+'/'+url+"']");
	// 	x[0].parentElement.previousElementSibling.classList.add('active');
	// 	x[0].parentElement.style.display = 'block';
	// }

	
}
