import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Inventario } from 'src/app/Modelo/Inventario';

@Component({
  selector: 'app-add-inventario',
  templateUrl: './add-inventario.component.html',
  styleUrls: ['./add-inventario.component.css']
})
export class AddInventarioComponent implements OnInit {

  modelInventario = new Inventario();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(inventario:Inventario){
    this.service.createInventario(inventario)
    .subscribe(data=>{
      alert("Se agrego con Exito...!!!");
      this.router.navigate(["listarInventario"]);
    })
  }

}
