import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './accounts/login/login.component';
import { MessagesComponent } from './messages/messages.component';


// Routes
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'chat', component: MessagesComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
