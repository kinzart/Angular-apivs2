import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export  class ClientesService {

	clientesUrl = 'http://apivs3-com-br.umbler.net/order'

  constructor(private http: HttpClient) { }
  listar() {
  	return this.http.get<any[]>(`${this.clientesUrl}`)
  }
}

