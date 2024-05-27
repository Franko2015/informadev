import { Component } from '@angular/core';
import { PrivNavComponent } from '../../components/priv-nav/priv-nav.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [PrivNavComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
