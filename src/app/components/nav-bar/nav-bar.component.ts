import { Component, Inject, OnInit } from '@angular/core';
import { faUser, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isCollapsed = true;
  faUser = faUser;
  faPowerOff = faPowerOff;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document,private router:Router
  ) {}

  ngOnInit() {}

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

  logout() {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

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
