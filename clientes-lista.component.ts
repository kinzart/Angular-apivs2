import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service'

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes = Array<any>() 
    

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.listar()
  }

  listar() {
  this.clientesService.listar().subscribe(dados => this.clientes = dados);
  }

}
