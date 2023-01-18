import { Action, ActionReducerMap } from "@ngrx/store";
import { UsuariosState, usuariosReduce } from "./usuarios/usuarios.reducer";
import { UsuariosEffects } from "./usuarios/usuarios.effects";

export interface AppState{
  usuarios: UsuariosState
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: usuariosReduce
}

export const appEffects = [
  UsuariosEffects
]
