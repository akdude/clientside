import { RouterModule, Routes } from '@angular/router';

import { AccordionModule } from 'ngx-bootstrap/accordion';
// Components
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
// Import Plugins
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { CustomFormsModule } from 'ng2-validation';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaddaModule } from 'angular2-ladda';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// Import Services
// import { SortablejsModule } from 'ngx-sortablejs'; 
import { SweetAlert2Module } from '@toverux/ngsweetalert2';
import {MatDialogModule} from '@angular/material/dialog';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
// Import routes
import { routes } from './app.routes';
import { LoginComponent } from './accounts/login/login.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { DragNDropComponent } from './components/drag-n-drop/drag-n-drop.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {MatExpansionModule} from '@angular/material/expansion';
import { MessagesComponent } from './messages/messages.component';
import { PusherService } from './pusher.service';
import { MessageService } from './message.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
	declarations: [
		AppComponent,
		DashboardComponent,
		LoginComponent,
		DragNDropComponent,
		PaginationComponent,
		MessagesComponent,
	
	],
	imports: [
		BrowserModule,
		NgxPaginationModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot(), // ToastrModule added
		FormsModule,
		HttpClientModule,
        RouterModule.forRoot(routes),
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
        AccordionModule.forRoot(),
		ButtonsModule.forRoot(),
		ModalModule.forRoot(),
		CarouselModule.forRoot(),
		PopoverModule.forRoot(),
		TabsModule.forRoot(),
		TooltipModule.forRoot(),
		NgMultiSelectDropDownModule.forRoot(),
		ReactiveFormsModule,
		BsDatepickerModule.forRoot(),
		LaddaModule,
		CustomFormsModule,
		ColorPickerModule,
		CKEditorModule,
		MatExpansionModule,
		MatDialogModule,
		MatButtonModule
		
	],
	providers: [
		{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
		PusherService,
		MessageService
    ],
	bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
