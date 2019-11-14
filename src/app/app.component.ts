import { Component } from '@angular/core';
/**Importo los servicios que voy a utilizar */
import { ServicioService } from './servicio.service';
import { Publicacion } from './publicacion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HttpClient';

  publicaciones: Array<Publicacion>;

  constructor( private http: ServicioService ) {
    this.http.getData().subscribe(datos => {
      console.log( typeof(datos) );
      this.publicaciones = datos;
    });
  }


}
