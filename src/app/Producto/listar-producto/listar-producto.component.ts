import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Producto } from 'src/app/Modelo/Producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {

  productos:Producto[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getProductos()
    .subscribe(data=>{
      this.productos=data;
    })
  }

  Editar(producto:Producto):void{
    localStorage.setItem("id", producto.id_producto.toString());
    this.router.navigate(["editProducto"]);
  }

  Delete(producto:Producto){
    this.service.deleteProducto(producto)
    .subscribe(data=>{
      this.productos=this.productos.filter(p=>p!==producto);
      alert("Usuario eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(["addProducto"]);
  }

}
