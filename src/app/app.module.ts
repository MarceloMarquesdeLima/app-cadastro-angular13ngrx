import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarEmpresasComponent } from './listar-empresa/listar-empresas.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CadastroEmpresasComponent } from './cadastro-empresa/cadastro-empresa.component';
import { StoreModule } from '@ngrx/store';
import { appEffects, appReducer } from './Store/app-state';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ListaEmpresasPequenaComponent } from './lista-empresa-pequena/lista-empresas-pequena.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpresasPequenaComponent,
    MainComponent,
    CadastroEmpresasComponent,
    ListarEmpresasComponent
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
