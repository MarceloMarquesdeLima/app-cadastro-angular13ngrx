import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";
import * as fromUsuariosAction from "../usuarios/usuarios.action";
import { filter } from "rxjs";

export interface UsuariosState{
  usuarios: UsuarioModel[];
  usuario: UsuarioModel | null,
  error: string | ''
}

export const initialState: UsuariosState = {
  usuarios: [],
  usuario: null,
  error: ''
}

const _usuariosReduce = createReducer(
  initialState,
  on(fromUsuariosAction.LoadUsuariosSuccess,(state,{ payload }) => ({
    ...state, usuarios: payload, error:'' })),
  on(fromUsuariosAction.LoadUsuariosFail,(state,{ error }) => ({
    ...state, error: error })),

  on(fromUsuariosAction.LoadUsuarioSuccess,(state,{ payload }) => ({
    ...state, usuario: payload, error:'' })),
  on(fromUsuariosAction.LoadUsuarioFail,(state,{ error }) => ({ ...state, error: error })),

  on(fromUsuariosAction.CreateUsuarioSuccess,(state,{ payload }) => ({
    ...state, usuarios: [ ...state.usuarios, payload ], error:'' })),
  on(fromUsuariosAction.CreateUsuarioFail,(state,{ error }) => ({ ...state, error: error })),

  on(fromUsuariosAction.UpdateUsuarioSuccess,(state,{ payload }) => ({
    ...state,
    usuarios: [ ...state.usuarios].map((row) => {
      if(row.id == payload.id){
        return payload
      }else{
        return row;
      }
    }),
    error:'' })),
  on(fromUsuariosAction.UpdateUsuarioFail,(state,{ error }) => ({ ...state, error: error })),

  on(fromUsuariosAction.DeleteUsuarioSuccess,(state,{ payload }) => ({
    ...state, usuarios: [ ...state.usuarios ].filter((filter)=> filter.id != payload), error:'' })),
  on(fromUsuariosAction.DeleteUsuarioFail,(state,{ error }) => ({ ...state, error: error })),
)

export function usuariosReduce(state = initialState, action: Action) {
  return _usuariosReduce(state, action);
}