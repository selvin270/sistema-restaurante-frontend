import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tienda } from 'src/app/Modelo/Tienda';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-tienda',
  templateUrl: './edit-tienda.component.html',
  styleUrls: ['./edit-tienda.component.css']
})
export class EditTiendaComponent implements OnInit {

  modelTienda = new Tienda();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id=localStorage.getItem("id");
    this.service.getTiendaId(+id)
    .subscribe(data=>{
      this.modelTienda=data;
    })
  }

  Actualizar(tienda:Tienda){
    this.service.updateTienda(tienda)
    .subscribe(data=>{
      this.modelTienda=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listarTienda"]);
    })
  }

}
