import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Empleado } from 'src/app/Modelo/Empleado';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  empleados:Empleado[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmpleados()
    .subscribe(data=>{
      this.empleados=data;
    })
  }

  Editar(empleado:Empleado):void{
    localStorage.setItem("id", empleado.id_empleado.toString());
    this.router.navigate(["edit"]);
  }

  Delete(empleado:Empleado){
    this.service.deleteEmpleado(empleado)
    .subscribe(data=>{
      this.empleados=this.empleados.filter(p=>p!==empleado);
      alert("Usuario eliminado...");
    })
  }
  
  Nuevo(){
    this.router.navigate(["add"]);
  }

}
