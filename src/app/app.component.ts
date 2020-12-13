import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	public currenturl = null;
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
	ngOnInit() {
		
	}

    
}
