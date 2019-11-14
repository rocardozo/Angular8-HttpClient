import { Injectable } from '@angular/core';
/*Importamos la calse HttpClient*/
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private endPoint: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { 
    console.log('estoy trabajando con HttpClient');
  }

  getData() {
    return this.http.get(this.endPoint);
  }
}
