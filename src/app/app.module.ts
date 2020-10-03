import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

import { ListarComponent } from './Empleado/listar/listar.component';
import { AddComponent } from './Empleado/add/add.component';
import { EditComponent } from './Empleado/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';

import { ListarProductoComponent } from './Producto/listar-producto/listar-producto.component';
import { EditProductoComponent } from './Producto/edit-producto/edit-producto.component';
import { AddProductoComponent } from './Producto/add-producto/add-producto.component';
import { EditTiendaComponent } from './Tienda/edit-tienda/edit-tienda.component';
import { AddTiendaComponent } from './Tienda/add-tienda/add-tienda.component';
import { ListarTiendaComponent } from './Tienda/listar-tienda/listar-tienda.component';
import { ListarInventarioComponent } from './Inventario/listar-inventario/listar-inventario.component';
import { EditInventarioComponent } from './Inventario/edit-inventario/edit-inventario.component';
import { AddInventarioComponent } from './Inventario/add-inventario/add-inventario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    ExternalApiComponent,
    ListarProductoComponent,
    EditProductoComponent,
    AddProductoComponent,
    EditTiendaComponent,
    AddTiendaComponent,
    ListarTiendaComponent,
    ListarInventarioComponent,
    EditInventarioComponent,
    AddInventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    HighlightModule,
    FontAwesomeModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
    ServiceService,
    {
      provide: Window,
      useValue: window,
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/highlight'),
        languages: {
          json: () => import('highlight.js/lib/languages/json'),
        },
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
