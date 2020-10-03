import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Inventario } from 'src/app/Modelo/Inventario';

@Component({
  selector: 'app-listar-inventario',
  templateUrl: './listar-inventario.component.html',
  styleUrls: ['./listar-inventario.component.css']
})
export class ListarInventarioComponent implements OnInit {

  inventarios:Inventario[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getInventarios()
    .subscribe(data=>{
      this.inventarios=data;
    })
  }

  Editar(inventario:Inventario):void{
    localStorage.setItem("id", inventario.id_inventario.toString());
    this.router.navigate(["editInventario"]);
  }

  Delete(inventario:Inventario){
    this.service.deleteInventario(inventario)
    .subscribe(data=>{
      this.inventarios=this.inventarios.filter(p=>p!==inventario);
      alert("Inventario eliminado...");
    })
  }
  
  Nuevo(){
    this.router.navigate(["addInventario"]);
  }

}
