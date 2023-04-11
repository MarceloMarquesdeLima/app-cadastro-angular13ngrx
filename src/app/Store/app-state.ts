import { Action, ActionReducerMap } from "@ngrx/store";
import { EmpresasState, empresasReduce } from "./empresa/empresa.reducer";
import { EmpresasEffects } from "./empresa/empresa.effects";

export interface AppState{
  usuarios: EmpresasState
}

export const appReducer: ActionReducerMap<AppState> = {
  usuarios: empresasReduce
}

export const appEffects = [
  EmpresasEffects
]
