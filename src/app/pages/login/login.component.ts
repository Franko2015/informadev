import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { CountriesService } from '../../services/countries/countries.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  validacion: string = 'Ingrese a su cuenta';

  usernameNuevo: string = '';
  passwordNuevo: string = '';
  passwordNuevoMisma: string = '';
  correoNuevo: string = '';

  nuevo: any

  paises: any = [];

  constructor(private router: Router, private location: Location, private toastr: ToastrService, private paisesService: CountriesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      if(params['nuevo'] == 0){
        this.nuevo = false
      }else{
        this.nuevo = true
      }
    });

    this.paisesService.getPaises().subscribe({
      next: (data: any) => {
        this.paises = data
      },
      error: (error: HttpErrorResponse) => {
        error.status == 401 ? this.router.navigate(['/']) : alert("No se pudo cargar los productos");
      }
    });

  }

  onSubmit(){
    
  }
}
