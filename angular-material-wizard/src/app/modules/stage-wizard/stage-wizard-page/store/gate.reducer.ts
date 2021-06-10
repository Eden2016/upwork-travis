import { createReducer, Action, on } from "@ngrx/store";
import * as RecipesActions from './gate.actions';
import { Gate } from "src/app/modules/models/gate.model";

export interface State {
  gates: Gate[];
}

const initialState: State = {
  gates: []
};

const _gateReducer = createReducer(

  initialState,

  on(
    RecipesActions.addGate,
    (state, action) => ({
      ...state,
      recipes: state.gates.concat({ ...action.gate })
    })
  )
)

export const gateReducer = (state: State, action: Action) => {
  return _gateReducer(state, action);
}


