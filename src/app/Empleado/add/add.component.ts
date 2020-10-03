import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Empleado } from 'src/app/Modelo/Empleado';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  modelEmpleado = new Empleado();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(empleado:Empleado){
    this.service.createEmpleado(empleado)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
