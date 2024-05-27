import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-priv-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './priv-nav.component.html',
  styleUrl: './priv-nav.component.css'
})
export class PrivNavComponent {

}
