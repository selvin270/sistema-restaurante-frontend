import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../Modelo/Empleado';
import { Producto } from '../Modelo/Producto';
import { Tienda } from '../Modelo/Tienda';
import { Inventario } from '../Modelo/Inventario';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/empleado';
  UrlProducto='http://localhost:8080/producto';
  UrlTienda='http://localhost:8080/tienda';
  UrlInventario='http://localhost:8080/inventario';

  getEmpleados(){
    return this.http.get<Empleado[]>(this.Url);
  }

  createEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.Url,empleado);
  }

  getEmpleadoId(id:number){
    return this.http.get<Empleado>(this.Url+"/"+id);
  }

  updateEmpleado(empleado:Empleado){
    return this.http.put<Empleado>(this.Url+"/"+empleado.id_empleado,empleado);
  }

  deleteEmpleado(empleado:Empleado){
    return this.http.delete<Empleado>(this.Url+"/"+empleado.id_empleado);
  }

  getProductos(){
    return this.http.get<Producto[]>(this.UrlProducto);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.UrlProducto,producto);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.UrlProducto+"/"+id);
  }

  updateProducto(producto:Producto){
    return this.http.put<Producto>(this.UrlProducto+"/"+producto.id_producto,producto);
  }

  deleteProducto(producto:Producto){
    return this.http.delete<Producto>(this.UrlProducto+"/"+producto.id_producto);
  }




  getTiendas(){
    return this.http.get<Tienda[]>(this.UrlTienda);
  }

  createTienda(tienda:Tienda){
    return this.http.post<Tienda>(this.UrlTienda,tienda);
  }

  getTiendaId(id:number){
    return this.http.get<Tienda>(this.UrlTienda+"/"+id);
  }

  updateTienda(tienda:Tienda){
    return this.http.put<Tienda>(this.UrlTienda+"/"+tienda.id_tienda,tienda);
  }

  deleteTienda(tienda:Tienda){
    return this.http.delete<Tienda>(this.UrlTienda+"/"+tienda.id_tienda);
  }



  getInventarios(){
    return this.http.get<Inventario[]>(this.UrlInventario);
  }

  createInventario(inventario:Inventario){
    return this.http.post<Inventario>(this.UrlInventario,inventario);
  }

  getInventarioId(id:number){
    return this.http.get<Inventario>(this.UrlInventario+"/"+id);
  }

  updateInventario(inventario:Inventario){
    return this.http.put<Inventario>(this.UrlInventario+"/"+inventario.id_inventario,inventario);
  }

  deleteInventario(inventario:Inventario){
    return this.http.delete<Inventario>(this.UrlInventario+"/"+inventario.id_inventario);
  }


}
