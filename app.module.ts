import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesListaComponent } from './clientes-lista/clientes-lista.component';
import { HttpClientModule } from '@angular/common/http'
import { ClientesService } from './clientes.service'

@NgModule({
  declarations: [
    AppComponent,
    ClientesListaComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
