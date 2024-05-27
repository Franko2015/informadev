import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';
import PageComponent from './pages/page/page.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:nuevo', component: LoginComponent },
  { path: 'account', component: AccountComponent },
  {
    path: 'private', children: [
      { path: 'admin', component: AdminComponent },
      { path: 'page', component: PageComponent },
      { path: 'settings', component: SettingsComponent }
    ]
  },
  { path: '**', component: ErrorComponent }
];

