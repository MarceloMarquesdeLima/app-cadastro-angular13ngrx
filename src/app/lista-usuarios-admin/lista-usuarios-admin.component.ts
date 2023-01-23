import { Component, OnInit } from '@angular/core';
import { Observable, filter } from 'rxjs';
import { UsuarioModel } from '../Models/UsuarioModel';
import { AppState } from '../Store/app-state';
import { Store } from '@ngrx/store';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';

@Component({
  selector: 'app-lista-usuarios-admin',
  templateUrl: './lista-usuarios-admin.component.html',
  styleUrls: ['./lista-usuarios-admin.component.css']
})
export class ListaUsuariosAdminComponent implements OnInit {
  // exemplo 1
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministrador);

  // exemplo 2
  listaUsuarios: UsuarioModel[] = [];

  // exemplo 3
  listaUsuarios3: UsuarioModel[] = [];

  // exemplo 4
  listaUsuarios4: UsuarioModel[] = [];

  // exemplo 1
  listaUsuarios5$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuariosAdministradorPorParametro, { perfil: 'Administrador'});

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // exemplo 2
    this.store.select(fromUsuariosSelector.getUsuariosAdministrador)
    .subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios = usuarios;
    });

    // exemplo 3
    this.store.select(fromUsuariosSelector.getUsuarios)
    .subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios3 = usuarios.filter((filter) => filter.perfil == 'Administrador');
    });

    // exemplo 3
    this.store.select(fromUsuariosSelector.getUsuariosAdministradorPorParametro, {perfil: 'Administrador'})
    .subscribe((usuarios: UsuarioModel[]) => {
      this.listaUsuarios4 = usuarios.filter((filter) => filter.perfil == 'Administrador');
    });
  }
}
