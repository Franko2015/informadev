import { Component } from '@angular/core';
import { PrivNavComponent } from '../../components/priv-nav/priv-nav.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [PrivNavComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
