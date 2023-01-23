import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducer } from './Store/app-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListaUsuariosAdminComponent } from './lista-usuarios-admin/lista-usuarios-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuariosComponent,
    MainComponent,
    CadastroUsuariosComponent,
    ListaUsuariosAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
