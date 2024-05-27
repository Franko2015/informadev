import { Component } from '@angular/core';
import { PrivNavComponent } from '../../components/priv-nav/priv-nav.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [PrivNavComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {

}
