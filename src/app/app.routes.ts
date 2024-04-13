import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AccountComponent } from './home/account/account.component';
import { AdminComponent } from './home/admin/admin.component';
import { PageComponent } from './home/page/page.component';
import { SettingsComponent } from './home/settings/settings.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login/:nuevo', component: LoginComponent},
  {path: '**', component: ErrorComponent},
  {path: 'account', component: AccountComponent},
  {path: 'account', children: [
    {path: 'admin', component: AdminComponent},
    {path: 'page', component: PageComponent},
    {path: 'settings', component: SettingsComponent}
  ]}
];
