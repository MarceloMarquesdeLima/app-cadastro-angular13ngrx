import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../Models/UsuarioModel';
import { Store } from '@ngrx/store';
import { AppState } from '../Store/app-state';
import * as fromUsuariosAction from '../Store/usuarios/usuarios.action';
import * as fromUsuariosSelector from '../Store/usuarios/usuarios.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})

export class ListarUsuariosComponent implements OnInit {
  listaUsuarios$: Observable<UsuarioModel[]> = this.store.select(fromUsuariosSelector.getUsuarios);
  usuario$ : Observable<UsuarioModel | null> = this.store.select(fromUsuariosSelector.getUsuario);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(fromUsuariosAction.LoadUsuarios());
  }

  editar(id: number){
    this.store.dispatch(fromUsuariosAction.LoadUsuario({payload:id}));
  }

  excluir(id: number){
    this.store.dispatch(fromUsuariosAction.DeleteUsuario({payload:id}));
  }
}
