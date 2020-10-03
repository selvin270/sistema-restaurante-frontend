import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/Modelo/Empleado';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  modelEmpleado = new Empleado();
  //empleado :Empleado=new Empleado();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getEmpleadoId(+id)
    .subscribe(data=>{
      this.modelEmpleado=data;
    })
  }

  Actualizar(empleado:Empleado){
    this.service.updateEmpleado(empleado)
    .subscribe(data=>{
      this.modelEmpleado=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
