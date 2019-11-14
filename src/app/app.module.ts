import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**Importo el modulo para trabajar con http */
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

/** importo el servicio que voy a utilizar */
import { ServicioService } from './servicio.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ServicioService],     /**Los servicios van en providers */
  bootstrap: [AppComponent]
})
export class AppModule { }
