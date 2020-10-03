import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from 'src/app/Modelo/Inventario';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-inventario',
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.css']
})
export class EditInventarioComponent implements OnInit {

  modelInventario = new Inventario();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getInventarioId(+id)
    .subscribe(data=>{
      this.modelInventario=data;
    })
  }

  Actualizar(inventario:Inventario){
    this.service.updateInventario(inventario)
    .subscribe(data=>{
      this.modelInventario=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarInventario"]);
    })
  }

}
