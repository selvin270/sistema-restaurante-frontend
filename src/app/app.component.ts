import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Auth0 Angular SDK Sample';

  constructor(private router:Router) {}

  Listar(){
    this.router.navigate(["listar"]);
  }

  ListarProducto(){
    this.router.navigate(["listarProducto"]);
  }

  ListarTienda(){
    this.router.navigate(["listarTienda"]);
  }

  ListarInventario(){
    this.router.navigate(["listarInventario"]);
  }

}
