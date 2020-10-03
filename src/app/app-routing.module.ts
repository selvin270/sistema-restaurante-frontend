import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { ListarComponent } from './Empleado/listar/listar.component';
import { AddComponent } from './Empleado/add/add.component';
import { EditComponent } from './Empleado/edit/edit.component';
import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { ListarTiendaComponent } from './Tienda/listar-tienda/listar-tienda.component';
import { EditTiendaComponent } from './Tienda/edit-tienda/edit-tienda.component';
import { AddTiendaComponent } from './Tienda/add-tienda/add-tienda.component';
import { ListarInventarioComponent } from './Inventario/listar-inventario/listar-inventario.component';
import { EditInventarioComponent } from './Inventario/edit-inventario/edit-inventario.component';
import { AddInventarioComponent } from './Inventario/add-inventario/add-inventario.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {path:'listar', component:ListarComponent},
  {path:'add', component:AddComponent},
  {path:'edit', component:EditComponent},
  {path:'listarProducto', component:ListarProductoComponent},
  {path:'editProducto', component:EditProductoComponent},
  {path:'addProducto', component:AddProductoComponent},
  {path:'listarTienda', component:ListarTiendaComponent},
  {path:'editTienda', component:EditTiendaComponent},
  {path:'addTienda', component:AddTiendaComponent},
  {path:'listarInventario', component:ListarInventarioComponent},
  {path:'editInventario', component:EditInventarioComponent},
  {path:'addInventario', component:AddInventarioComponent},
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
